import styles from "../styles/Carousel.module.css";
import Carousel from "./Carousel";
import ItemCard from "./ItemCard";
import { Divider } from 'semantic-ui-react'

const MinitngCalendar = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>다가오는 민팅 일정</h3>
      </div>
      <Divider hidden />
      <div
        style={{
          maxWidth: 1400,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel show={4}>
          {[1,2,3,4,5,6,7,8,9,10].map((item) => (
            <ItemCard key={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MinitngCalendar;
