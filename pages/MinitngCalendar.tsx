import styles from "../styles/Calendar.module.css";
import { Divider, Icon } from "semantic-ui-react";
import dynamic from "next/dynamic";
import { OPEN_MODAL } from "../reducers/modalReducer";
import { useDispatch } from "react-redux";
import React, { forwardRef } from "react";
const TuiCalendar = dynamic(() => import("./TuiCalendarWrapper"), {
  ssr: false,
});
const Calendar = forwardRef((props: any, ref) => (
  <TuiCalendar {...props} forwardedRef={ref} />
));

const MinitngCalendar = ({ items }: { items: any }) => {
  const dispatch = useDispatch();
  const calendarRef = React.createRef();

  return (
    <>
      <div className={styles.container}>
        <h3>한눈에 보는 일정👀</h3>
      </div>
      <Divider hidden />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "large",
          }}
        >
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (calendarRef) {
                const calendarInstance = calendarRef.current.getInstance();

                calendarInstance.prev();
              }
            }}
          >
            <Icon name="angle left" />
          </span>
          4월
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (calendarRef) {
                const calendarInstance = calendarRef.current.getInstance();

                calendarInstance.next();
              }
            }}
          >
            <Icon name="angle right" />
          </span>
        </div>

        <Calendar
          ref={calendarRef}
          view="month"
          height=""
          month={
            {
              // narrowWeekend: true,
            }
          }
          onBeforeCreateSchedule={(e: any) => {
            console.log(e);
            // setOpenCreatePopup(true)
            // setSelectedDate(e.start.toDate())
          }}
          onClickSchedule={(e: any) => {
            console.log(e);
            const idx: string | undefined = e.schedule.calendarId;
            if (idx) {
              dispatch({
                type: OPEN_MODAL,
                payload: { item: items[Number(idx) - 1] },
              });
            }
          }}
          scheduleView
          // calendars={calendars}
          schedules={items.map((i: any, idx: number) => {
            return {
              id: i.id,
              calendarId: idx + 1,
              title: i.name,
              category: "allday",
              dueDateClass: "",
              start: new Date(i.startDate),
              end: new Date(i.endDate),
              bgColor: "#eeeeee",
            };
          })}
        />
      </div>
    </>
  );
};

export default MinitngCalendar;
