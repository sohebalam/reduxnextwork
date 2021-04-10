import "../styles/globals.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Container, ServerStyleSheets, ThemeProvider } from "@material-ui/core"
import theme from "../theme"
import {Provider} from "react-redux"
import withRedux from 'next-redux-wrapper'
import {wrapper }from '../redux/store'


function MyApp({ Component, pageProps }) {
  const sheets = new ServerStyleSheets()
  return sheets.collect(
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <Container>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Container>
      {/* </Provider> */}
    </ThemeProvider>
  )
}




export default wrapper.withRedux(MyApp)
