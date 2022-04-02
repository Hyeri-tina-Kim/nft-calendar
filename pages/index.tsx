import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MinitngCalendar from "./MinitngCalendar";
import MintingCarousel from "./MintingCarousel";
import { Divider, Segment, Button } from "semantic-ui-react";
import DetailModal from "./DetailModal";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {

  const [items, setItems] = useState([]);

  const getItem = () => {
    axios.get(`http://localhost:1337/projects`).then((res) => {
      if (res.status === 200) {
        setItems(res.data);
      } else {
        //
      }
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Calendar</title>
        <meta
          name="description"
          content="It's a calendar that you can see the NFT minting schedule."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Segment raised color="blue">
          <div style={{ marginLeft: "70px", marginTop: "40px" }}>
            <div>
              <span>요즘은 어떤 NFT 프로젝트가 있을까?</span>
              <h1 style={{ marginTop: 0 }}>NFT 민팅&이벤트 일정 모아보기</h1>
            </div>
            <div style={{ float: "right", marginRight: "80px" }}>
              <Button secondary>NFT 일정 알림 받기</Button>
              <Button secondary>프로젝트 제보하기</Button>
            </div>
          </div>
          <Divider hidden />
          <MintingCarousel items={items} />
          <Divider hidden />
          <MinitngCalendar items={items} />
          <Divider hidden />
        </Segment>
        <DetailModal />
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/favicon.ico" />
          <strong className="mr-3">Contact</strong>
          xxxxx@gmail.com
        </a>
        <a className={styles.grayAnchor}>NFT 일정 및 이벤트 알림받기</a>
        <a className={styles.grayAnchor}>새로운 프로젝트 일정 제보하기</a>
      </footer>
    </div>
  );
};

export default Home;
