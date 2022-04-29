import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <a href="" target="_blank" rel="noopener noreferrer">
        <img src="/favicon.ico" />
        <strong className="mr-3">Contact</strong>
        tomorrow-nft@gmail.com
      </a>
      <a
        className={styles.grayAnchor}
        onClick={(e) => {
          window.open("https://page.stibee.com/subscriptions/70355", "");
        }}
      >
        NFT 일정 및 이벤트 알림받기
      </a>
      <a
        className={styles.grayAnchor}
        onClick={(e) => {
          router.push("/form");
        }}
      >
        새로운 프로젝트 일정 제보하기
      </a>
    </footer>
  );
};

export default Footer;
