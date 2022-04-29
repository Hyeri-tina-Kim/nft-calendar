import styles from "../styles/Calendar.module.css";
import { Divider } from "semantic-ui-react";
import { OPEN_MODAL } from "../reducers/modalReducer";
import { useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const MinitngCalendar = ({ items }: { items: any }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <h3>한눈에 보는 일정👀</h3>
      </div>
      <Divider hidden />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          locale="ko"
          firstDay={1}
          events={items.map((i: any, idx: number) => {
            return {
              id: i.id,
              title: i.attributes.name,
              start: new Date(i.attributes.startDate),
              end: new Date(i.attributes.endDate),
            };
          })}
          eventClick={(e: any) => {
            const idx: string | undefined = e.event.id;
            if (idx) {
              dispatch({
                type: OPEN_MODAL,
                payload: { item: items[Number(idx) - 1]?.attributes },
              });
            }
          }}
        />
      </div>
    </>
  );
};

export default MinitngCalendar;
