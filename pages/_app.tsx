import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import App, { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "../reducers/configureStore";
import React from "react";
import Footer from "./Footer";

// store 설정파일 로드
const store = configureStore();

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

RootApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default RootApp;
