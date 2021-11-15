import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import {SeoHead } from "../../src/components";
import Axios from "axios";
import { baseUrl } from "../../src/utils/Url";
import { useRouter } from "next/router";

const View: NextPage = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const callApi = async () => {
    await Axios.get(`${baseUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    callApi();
  }, []);
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
