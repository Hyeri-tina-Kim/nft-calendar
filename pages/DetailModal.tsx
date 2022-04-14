import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Grid, Header, Icon, Modal } from "semantic-ui-react";
import { RootState } from "../reducers";
import { CLOSE_MODAL } from "../reducers/modalReducer";

const DetailModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isOpen, item } = useSelector(
    (state: RootState) => state.modalReducer
  );

  return (
    <Modal
      dimmer="blurring"
      size="small"
      open={isOpen}
      onClose={() => dispatch({ type: CLOSE_MODAL })}
      style={{ fontSize: "medium" }}
    >
      <Modal.Header>{item?.name}</Modal.Header>
      <Modal.Content>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header>민팅일정</Header>
            </Grid.Column>
            <Grid.Column>
              {item?.startDate} ~ {item?.endDate}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header>가격</Header>
            </Grid.Column>
            <Grid.Column>{item?.price}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header>블록체인</Header>
            </Grid.Column>
            <Grid.Column>{item?.blockChain}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header>공식 홈페이지</Header>
            </Grid.Column>
            <Grid.Column width={10}>
              {item?.homeUrl && (
                <Button
                  color="google plus"
                  onClick={(e) => {
                    window.open(item?.homeUrl, "");
                  }}
                >
                  <Icon name="home" />
                  홈페이지
                </Button>
              )}

              {item?.discodeUrl && (
                <Button
                  color="facebook"
                  onClick={(e) => {
                    window.open(item?.discodeUrl, "");
                  }}
                >
                  <Icon name="discord" /> Discode
                </Button>
              )}
              {item?.twitterUrl && (
                <Button
                  color="twitter"
                  onClick={(e) => {
                    window.open(item?.twitterUrl, "");
                  }}
                >
                  <Icon name="twitter" /> Twitter
                </Button>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header>상세 내용</Header>
            </Grid.Column>
          </Grid.Row>
          <p>{item?.desc}</p>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header>민팅 일정 알림 받기</Header>
            </Grid.Column>
          </Grid.Row>
          <div>
            <p>해당 프로젝트 민팅 일정을 메일로 알림 받고 싶으신가요?</p>
            <Button
              secondary
              onClick={(e) => {
                window.open("https://page.stibee.com/subscriptions/70355", "");
              }}
            >
              NFT 일정 알림 받기
            </Button>
          </div>
        </Grid>
        <Divider hidden />
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={() => dispatch({ type: CLOSE_MODAL })}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DetailModal;
