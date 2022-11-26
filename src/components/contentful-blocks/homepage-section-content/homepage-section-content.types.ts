import { Collection, ContentTypename } from "@shared/contentful/contentful.types";
import { ExpertiseData } from "../expertise/expertise.types";

export type HomepageSectionContentData = {
	__typename: ContentTypename;
	sectionTitle: string;
	pageLink: string;
	fullwidthOnMobile: boolean;
	sectionContentCollection: Collection<ExpertiseData>;
};
