import { Collection } from "@shared/contentful/contentful.types";

export type HomepageContentData = {
	introClipsCollection: Collection<any>;
	contentCollection: Collection<any>;
	seo: any;
};

export type HomepageQueryData = {
	homepageCollection: Collection<HomepageContentData>;
};
