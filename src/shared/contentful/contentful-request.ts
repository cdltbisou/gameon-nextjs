import { GraphQLClient } from "graphql-request";
import getConfig from "next/config";

const {
	publicRuntimeConfig: {
		contentful: { space, baseUrl, token, previewToken, env }
	}
} = getConfig();

export type GraphQLRequestArgs<Variables = Record<string, string>> = {
	query: string;
	variables?: Variables;
	preview?: boolean;
};

export const contentfulPreviewRequest = async <Data, Variables>({
	query,
	variables
}: GraphQLRequestArgs<Variables>): Promise<Data | { error: unknown }> => {
	const endpoint = `${baseUrl}/spaces/${space}/environments/${env}`;

	const previewClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${previewToken}`
		}
	});

	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return await previewClient.request(query, variables as any);
	} catch (error) {
		console.error("error", error);
		return { error };
	}
};

const createClient = (preview: boolean) => {
	const endpoint = `${baseUrl}/content/v1/spaces/${space}/environments/${env}`;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const globalAny: any = globalThis;
	if (preview) {
		if (globalAny.contentfulPreviewClient) {
			return globalAny.contentfulPreviewClient;
		} else {
			globalAny.contentfulPreviewClient = new GraphQLClient(endpoint, {
				headers: {
					authorization: `Bearer ${previewToken}`
				}
			});
			return globalAny.contentfulPreviewClient;
		}
	} else {
		if (globalAny.contentfulClient) {
			return globalAny.contentfulClient;
		} else {
			globalAny.contentfulClient = new GraphQLClient(endpoint, {
				headers: {
					authorization: `Bearer ${token}`
				}
			});
			return globalAny.contentfulClient;
		}
	}
};

export const contentfulRequest = async <Data, Variables>({
	query,
	variables,
	preview = false
}: GraphQLRequestArgs<Variables>): Promise<
	| Data
	| {
			error: unknown;
	  }
> => {
	try {
		const client = createClient(preview);
		if (!client) {
			throw new Error("no client");
		}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: Data = await client.request(query, variables as any);
		return data;
	} catch (error) {
		return { error };
	}
};
