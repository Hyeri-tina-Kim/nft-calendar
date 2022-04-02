import styles from "../styles/Carousel.module.css";
import Carousel from "./Carousel";
import ItemCard from "./ItemCard";
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
          {items?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MinitngCalendar;
