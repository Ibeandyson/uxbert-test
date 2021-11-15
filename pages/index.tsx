import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { SeoHead, Card } from "../src/components";
import Axios from "axios";
import { baseUrl } from "../src/utils/Url";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  const callApi = async () => {
    await Axios.get(`${baseUrl}`, {
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

  return (
    <div>
      <div className={styles.container}>
        <SeoHead title="Home page" content="this is a test by andy" />
        <main className={styles.main}>
          <div className="row">
            {data.map((data: any) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
