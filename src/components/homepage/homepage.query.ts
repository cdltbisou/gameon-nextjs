import { gql } from "graphql-request";

import { HomepageSectionContentFragment } from "@components/contentful-blocks/homepage-section-content/homepage-section-content.fragment";
import { nativeVideoFragment } from "@components/contentful-blocks/native-video/native-video.fragment";
import { seoFragment } from "@components/contentful-blocks/seo/seo.fragment";

export const homepageQuery = gql`
	${nativeVideoFragment}
	${HomepageSectionContentFragment}
	${seoFragment}
	query homepageQuery($locale: String) {
		homepageCollection(locale: $locale, limit: 1) {
			items {
				introClipsCollection {
					items {
						...nativeVideo
					}
				}
				contentCollection {
					items {
						__typename
						...homepageSectionContent
					}
				}
				seo {
					...seo
				}
			}
		}
	}
`;
