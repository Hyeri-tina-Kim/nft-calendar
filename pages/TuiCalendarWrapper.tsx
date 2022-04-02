import React, { HTMLAttributes, FC, LegacyRef } from 'react'
import Calendar, { EventMaps } from '@toast-ui/react-calendar'
import { IOptions, ISchedule } from 'tui-calendar'

export type TUICalendarProps = IOptions &
  EventMaps & {
    height: string
    view?: string
    schedules?: ISchedule[]
  } & HTMLAttributes<HTMLElement>

type TUICalendarPropsWithRef = {
  forwardedRef: LegacyRef<Calendar>
} & TUICalendarProps

const TUICalendarWrapper: FC<TUICalendarPropsWithRef> = (props) => {
  if(!window) return null
  
  return <Calendar {...props} ref={props.forwardedRef} />
}

export default TUICalendarWrapper