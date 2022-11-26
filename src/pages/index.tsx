import React from "react";
import { gql } from "graphql-request";

import { Landing } from "@components/landing/Landing.component";
import useContentful from "@hooks/useContentful";
import { GetStaticProps } from "next";
import { contentfulRequest } from "@shared/contentful/contentful-request";
import { homepageQuery } from "@components/homepage/homepage.query";

export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log("ctx", ctx);

	const { locale = "en" } = ctx;

	const data = await contentfulRequest({
		query: homepageQuery,
		variables: { locale }
	});
	console.log("data", data);

	return {
		props: {
			coucou: "bonjour"
		}
	};
};

const Homepage = () => {
	const query = gql`
		query test {
			homepageCollection {
				items {
					sys {
						id
					}
				}
			}
		}
	`;
	const { data, error, isValidating } = useContentful({ query, options: { id: "32" } });
	console.log("data", data);
	console.log("error", error);
	console.log("isValidating", isValidating);

	return <Landing />;
};

export default Homepage;
