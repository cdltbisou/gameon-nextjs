import React from "react";
import { gql } from "graphql-request";

import { Landing } from "@components/landing/Landing.component";
import useContentful from "@hooks/useContentful";

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
