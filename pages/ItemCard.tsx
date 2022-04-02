import { useDispatch } from "react-redux";
import { Card, Image, Button } from "semantic-ui-react";
import { OPEN_MODAL } from "../reducers/modalReducer";

const ItemCard = ({ item }: { item: any }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 5 }}>
      <Card>
        {/* <Image src="https://via.placeholder.com/300x150" wrapped ui={false} /> */}
        <Image
          src="https://shop.r10s.jp/wiggle-wiggle/cabinet/1_phone/2_embro/ec-010_015/c_ec-010_015-06.jpg"
          wrapped
          ui={false}
          size="medium"
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
