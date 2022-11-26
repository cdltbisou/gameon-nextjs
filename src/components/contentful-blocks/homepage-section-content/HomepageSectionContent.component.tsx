import React from "react";
import { HomepageSectionContentData } from "./homepage-section-content.types";

// import styles from "./homepage-section-content.module.scss";

type Props = {
	content: HomepageSectionContentData;
};

const HomepageSectionContent = ({ content }: Props) => {
	console.log("content", content);

	return <div>homepage section</div>;
};
export default HomepageSectionContent;
