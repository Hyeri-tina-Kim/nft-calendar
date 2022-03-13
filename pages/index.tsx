import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MinitngCalendar from "./MinitngCalendar";
import MintingCarousel from "./MintingCarousel";
import { Divider, Segment } from 'semantic-ui-react'

const Home: NextPage = () => {
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
      <Segment raised color='blue'>
      <Divider hidden />
        <MintingCarousel />
        <Divider hidden />
        <MinitngCalendar />
        <Divider hidden />
        </Segment>
        
      </main>

      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/favicon.ico" />Powered by
          <strong className="ml-3">NFT Project Calendar</strong>
        </a>
      </footer>
    </div>
  );
};

export default Home;
