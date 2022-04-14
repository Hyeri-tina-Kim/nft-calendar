import React, { HTMLAttributes, FC, LegacyRef } from "react";
// import Calendar, { EventMaps } from "@toast-ui/react-calendar";
import dynamic from "next/dynamic";
const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
  ssr: false,
});
import { IOptions, ISchedule } from "tui-calendar";

// export type TUICalendarProps = IOptions &
//   EventMaps & {
//     height: string;
//     view?: string;
//     schedules?: ISchedule[];
//   } & HTMLAttributes<HTMLElement>;

// type TUICalendarPropsWithRef = {
//   forwardedRef: LegacyRef<Calendar>;
// } & TUICalendarProps;

export default (props: any) => {
  return <Calendar {...props} ref={props.forwardedRef} />;
};
