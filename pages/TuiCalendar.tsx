import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import Calendar from '@toast-ui/react-calendar'
import { TUICalendarProps } from './TuiCalendarWrapper'
const TuiCalendar = dynamic(() => import("./TuiCalendarWrapper"), {
    ssr: false,
  });
const TUICalendarWithForwardedRef = forwardRef<Calendar, TUICalendarProps>(
  (props, ref) => {
    return <TuiCalendar {...props} forwardedRef={ref} />
  }
)


export default TUICalendarWithForwardedRef