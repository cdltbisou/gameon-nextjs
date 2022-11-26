import { gql } from "graphql-request";

export const HomepageSectionContentFragment = gql`
	fragment homepageSectionContent on HomepageSectionContent {
		__typename
		sectionTitle
		fullwidthOnMobile
		pageLink
		sectionId
		sectionContentCollection {
			items {
				__typename
			}
		}
	}
`;
