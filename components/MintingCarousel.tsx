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
    </>
  );
};

export default MinitngCalendar;
