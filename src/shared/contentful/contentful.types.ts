export enum ContentTypename {
	HomepageSectionContent = "HomepageSectionContent",
	Expertise = "Expertise"
}

export type Collection<Data> = {
	items: Data[];
	total?: number;
	skip?: number;
	limit?: number;
};
