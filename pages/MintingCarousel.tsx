import styles from "../styles/Carousel.module.css";
import Carousel from "./Carousel";
import ItemCard from "./ItemCard";
import { Divider } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";

const MinitngCalendar = () => {
  const [items, setItems] = useState([]);

  const getItem = () => {
    axios.get(`http://localhost:1337/projects`).then((res) => {
      if (res.status === 200) {
        setItems(res.data);
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
            <ItemCard key={item} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MinitngCalendar;
