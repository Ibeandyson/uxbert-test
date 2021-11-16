import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { SeoHead, Card } from "../src/components";
import useGetAllData from "../src/hooks/useGetAllData";

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  const { getAllData, sendingData } = useGetAllData();

  const callApi = async () => {
    await getAllData();
    await setData(sendingData);
  };

  useEffect(() => {
    callApi();
  }, [sendingData.length > 0]);

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
