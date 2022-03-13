import styles from "../styles/Calendar.module.css";
import { Divider } from 'semantic-ui-react'
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
  ssr: false,
});

const MinitngCalendar = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>한눈에 보는 NFT 캘린더</h3>
      </div>
      <Divider hidden />
      <div style={{ width: "90%", margin: '0 auto' }}>
        <Calendar
          view="month"
          height=""
          month={{
            // narrowWeekend: true,
          }}
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
