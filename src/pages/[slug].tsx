import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

// import styles from "./Page.module.scss";

type Props = {
	coucou: string;
};

export const getStaticProps: GetStaticProps = (ctx) => {
	console.log("ctx", ctx);

	return {
		props: {
			coucou: "bonjour"
		}
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [{ params: { slug: "coucou" } }],
		fallback: "blocking"
	};
};

const Page = ({ coucou }: Props) => {
	console.log(coucou);

	return <div>coucou</div>;
};

export default Page;
