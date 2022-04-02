import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import "tui-calendar/dist/tui-calendar.css";
import App, { AppContext, AppProps } from "next/app";
import { Provider } from "react-redux";
import configureStore from "../reducers/configureStore";

// store 설정파일 로드
const store = configureStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
