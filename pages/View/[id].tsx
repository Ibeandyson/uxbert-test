import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { SeoHead } from "../../src/components";
import { useRouter } from "next/router";
import useGetSingleData from "../../src/hooks/useGetSingleData";

const View: NextPage = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { id }: any = router.query;

  const { getSingleData, sendingData } = useGetSingleData();

  const callApi = async () => {
    if (!id) {
      return;
    } else {
      await getSingleData(id);
      await setData(sendingData);
    }
  };

  useEffect(() => {
    callApi();
  }, [Object.keys(sendingData).length > 1, id]);

  const { title, body }: any = data;
  return (
    <div>
      <div className={styles.container}>
        <SeoHead title="Home page" content="this is a test by andy" />
        <main className={styles.main}>
          <div className="view_page">
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default View;
