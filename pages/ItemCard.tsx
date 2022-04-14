import { useDispatch } from "react-redux";
import { Card, Image, Button } from "semantic-ui-react";
import { OPEN_MODAL } from "../reducers/modalReducer";

const ItemCard = ({ item }: { item: any }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 5 }}>
      <Card>
        <img
          src={`http://ec2-15-165-0-175.ap-northeast-2.compute.amazonaws.com:1337${item?.thumbnail?.data?.attributes?.url}`}
          style={{
            width: 265,
            height: 150,
          }}
        />
        <Card.Content>
          <Card.Header>{item?.name}</Card.Header>
          <Card.Meta>
            <span style={{ color: "black", fontSize: "small" }}>
              {item?.startDate} ~ {item?.endDate}
              {/* 2022.03.26 (토) ~ 2022.03.27(일) */}
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
        {/* <Card.Content extra>
          <Label as="a" color="red" tag>
            Upcoming
          </Label>
          <Label as="a" color="teal" tag>
            Featured
          </Label>
          <Label as='a' tag>
      New
    </Label>
        </Card.Content> */}
      </Card>
    </div>
  );
};

export default ItemCard;
