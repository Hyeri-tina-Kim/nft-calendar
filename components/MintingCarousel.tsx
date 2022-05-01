import styles from "../styles/Carousel.module.css";
import Carousel from "./carousel/Carousel";
import ItemCard from "./carousel/ItemCard";
import { Divider } from "semantic-ui-react";

const MinitngCalendar = ({ items }: { items: any }) => {
  return (
    <>
      <div className={styles.container}>
        <h3>다가오는 일정🔥</h3>
      </div>
      <Divider hidden />
      {items?.length > 0 ? (
        <div
          style={{
            maxWidth: 1100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel show={4}>
            {items?.map((item: any) => (
              <ItemCard key={item.id} item={item.attributes} />
            ))}
          </Carousel>
        </div>
      ) : (
        <p style={{
          marginLeft: "80px"
        }}>예정된 일정이 없습니다. 프로젝트를 제보해주세요!</p>
      )}
    </>
  );
};

export default MinitngCalendar;
