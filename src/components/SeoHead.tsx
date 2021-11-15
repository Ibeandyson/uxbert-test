import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  content: string;
}

const SeoHead = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default SeoHead;
