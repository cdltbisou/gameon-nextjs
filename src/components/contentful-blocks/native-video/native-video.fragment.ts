import { gql } from "graphql-request";

export const nativeVideoFragment = gql`
	fragment nativeVideo on Video {
		__typename
		title
		videoUrl
		thumbnail {
			media {
				title
				description
				width
				height
				url
			}
		}
		asset {
			title
			description
			url
		}
	}
`;
