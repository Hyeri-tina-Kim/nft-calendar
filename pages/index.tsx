import type { NextPage } from "next";
import MinitngCalendar from "../components/MinitngCalendar";
import MintingCarousel from "../components/MintingCarousel";
import { Divider, Segment, Button } from "semantic-ui-react";
import DetailModal from "../components/DetailModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  const getItem = () => {
    axios
      .get(
        `http://ec2-15-165-0-175.ap-northeast-2.compute.amazonaws.com:1337/api/projects?populate=thumbnail`
      )
      .then((res) => {
        if (res.status === 200) {
          setItems(res.data.data);
        } else {
          //
        }
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <Segment raised color="blue">
        <div style={{ margin: "60px 60px" }}>
          <div>
            <span>요즘은 어떤 NFT 프로젝트가 있을까?</span>
            <h1 style={{ marginTop: 0 }}>NFT 민팅&이벤트 일정 모아보기</h1>
          </div>
          <div style={{ float: "right", marginRight: "80px" }}>
            <Button
              secondary
              onClick={(e) => {
                window.open("https://page.stibee.com/subscriptions/70355", "");
              }}
            >
              NFT 일정 알림 받기
            </Button>
            <Button
              primary
              onClick={(e) => {
                router.push("/form");
              }}
            >
              프로젝트 제보하기
            </Button>
          </div>
          <Divider hidden />
          <MintingCarousel items={items} />
          <Divider hidden />
          <MinitngCalendar items={items} />
        </div>
      </Segment>
      <DetailModal />
    </>
  );
};

export default Home;
