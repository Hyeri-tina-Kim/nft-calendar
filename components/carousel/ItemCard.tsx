import React from "react";
import { useDispatch } from "react-redux";
import { Card, Button } from "semantic-ui-react";
import { OPEN_MODAL } from "../../reducers/modalReducer";
import NoneImage from "../NoneImage";

const ItemCard = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  const thumbnailUrl = item?.thumbnail?.data?.attributes?.url;

  return (
    <div style={{ padding: 5 }}>
      <Card>
        {thumbnailUrl ? (
          <img
            src={`http://ec2-15-165-0-175.ap-northeast-2.compute.amazonaws.com:1337${thumbnailUrl}`}
            style={{
              height: 150,
            }}
          />
        ) : (
          <div
            style={{
              height: "150px",
              backgroundColor: "#f7f7f7",
            }}
          >
            <NoneImage />
          </div>
        )}

        <Card.Content>
          <Card.Header>{item?.name}</Card.Header>
          <Card.Meta>
            <span style={{ color: "black", fontSize: "small" }}>
              {item?.startDate} ~ {item?.endDate}
            </span>
          </Card.Meta>
          <Card.Description>
            <br />
            <div
              style={{
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <span style={{ fontSize: "small" }}>{item?.desc}</span>
            </div>
            <br />
          </Card.Description>
          <Card.Description>
            <div style={{ float: "right" }}>
              <Button
                size="mini"
                secondary
                onClick={() =>
                  dispatch({ type: OPEN_MODAL, payload: { item: item } })
                }
              >
                더 알아보기
              </Button>
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ItemCard;
