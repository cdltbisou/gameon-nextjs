import useSWR from "swr";
import { contentfulRequest } from "@shared/contentful/contentful-request";

export type GraphqlOptions<Variables> = {
	id: string;
	variables?: Variables;
};

export type GraphqlData<Data> = {
	data: Data | undefined;
	error?: unknown;
};

const useContentful = <Data, Variables>({
	query,
	options
}: {
	query: string;
	options: GraphqlOptions<Variables>;
}) => {
	const { id, variables } = options;

	const fetcher = async (fetcherQuery: string) =>
		contentfulRequest<Data, Variables>({ query: fetcherQuery, variables });

	const { data, error, isValidating } = useSWR([query, `${id}`], fetcher);

	return { data, error, isValidating };
};

export default useContentful;
