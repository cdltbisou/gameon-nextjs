import React from "react";
import Head from "next/head";

import styles from "./Landing.module.scss";

type Props = {};

export const Landing = (_props: Props) => {
	return (
		<>
			<Head>
				<title>Hello world</title>
			</Head>
			<div className={styles.wrapper}>
				<h1>hello, world</h1>
			</div>
		</>
	);
};
