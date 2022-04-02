import styles from "../styles/Calendar.module.css";
import { Divider, Icon } from "semantic-ui-react";
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
  ssr: false,
});

const MinitngCalendar = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>한눈에 보는 일정👀</h3>
      </div>
      <Divider hidden />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <div style={{ width: "100%", textAlign: "center", marginBottom: "30px", fontSize: "large"}}>
          <Icon name="angle left" />
          4월
          <Icon name="angle right" />
        </div>

        <Calendar
          view="month"
          height=""
          month={
            {
              // narrowWeekend: true,
            }
          }
          onBeforeCreateSchedule={(e) => {
            // setOpenCreatePopup(true)
            // setSelectedDate(e.start.toDate())
          }}
          onClickSchedule={(e) => {
            console.log(e);
          }}
          scheduleView
          // calendars={calendars}
          // schedules={schedules}
        />
      </div>
    </>
  );
};

export default MinitngCalendar;
