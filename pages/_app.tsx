import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import 'tui-calendar/dist/tui-calendar.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp