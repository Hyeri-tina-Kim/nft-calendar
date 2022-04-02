import React from "react";
import dynamic from "next/dynamic";

const Calendar = dynamic(() => import("@toast-ui/react-calendar"), {
  ssr: false,
});

export default (props: any) => <Calendar {...props} ref={props.forwardedRef} />;
