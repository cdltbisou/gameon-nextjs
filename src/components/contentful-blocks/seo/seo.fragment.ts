import { gql } from "graphql-request";

export const seoFragment = gql`
	fragment seo on Seo {
		seoTitle
		seoDescription
		siteDescription
	}
`;
