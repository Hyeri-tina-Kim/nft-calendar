import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Label,
  Segment,
} from "semantic-ui-react";
import { OPEN_MODAL } from "../../reducers/alertReducer";
import styles from "../../styles/Home.module.css";
import Alert from "../Alert";

const ProjectForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    startDate: "2022-05-01",
    endDate: "2022-05-01",
    desc: "",
    blockChain: "",
    homeUrl: "",
    discodeUrl: "",
    twitterUrl: "",
    price: "",
    thumbnail: null,
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const trimJSON = (object: any) => {
    if (object) {
      return JSON.parse(JSON.stringify(object).replace(/"\s+|\s+"/g, '"'));
    }

    return object;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>tomorrow NFT</title>
        <meta
          name="description"
          content="It's a calendar that you can see the NFT minting schedule."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Segment raised color="blue">
          <Label color="blue" ribbon>
            <h3>프로젝트 제보하기</h3>
          </Label>
          <Form
            style={{ padding: "15px 15px" }}
            onSubmit={(e) => {
              axios
                .post(
                  `http://ec2-15-165-0-175.ap-northeast-2.compute.amazonaws.com:1337/api/projects`,
                  {
                    data: trimJSON(formData),
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    dispatch({
                      type: OPEN_MODAL,
                      payload: { message: "제출되었습니다." },
                    });
                    location.href = "/";
                  } else {
                    //
                  }
                });
            }}
          >
            <Form.Field required>
              <label style={{ fontSize: "medium" }}>프로젝트명</label>
              <Form.Input required name="name" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "medium" }}>썸네일</label>
              <Button type="submit">업로드</Button>
            </Form.Field>
            <Form.Field required>
              <label style={{ fontSize: "medium" }}>가격</label>
              <Form.Input
                required
                name="price"
                placeholder="코인 단위까지 입력해주세요."
              />
            </Form.Field>
            <Form.Field required>
              <label style={{ fontSize: "medium" }}>블록체인</label>
              <Form.Input name="blockChain" required />
            </Form.Field>
            <Form.Field required>
              <label style={{ fontSize: "medium" }}>상세내용</label>
              <Form.TextArea
                required
                name="desc"
                placeholder="프로젝트 내용 및 안내사항에 대해 자세히 작성해주세요."
                style={{ minHeight: 130 }}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "medium" }}>홈페이지 주소</label>
              <Form.Input name="homeUrl" />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "medium" }}>디스코드 주소</label>
              <Form.Input name="discodeUrl" />
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: "medium" }}>트위터 주소</label>
              <Form.Input name="twitterUtl" />
            </Form.Field>
            <Divider hidden />
            <Form.Field>
              <Checkbox
                checked
                label="작성한 내용이 tomorrow NFT의 캘린더에 등록되는 것에 동의합니다."
              />
            </Form.Field>
            <Button type="submit" primary>
              제출
            </Button>
          </Form>
        </Segment>
        <Alert />
      </main>

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
    </div>
  );
};

export default ProjectForm;
