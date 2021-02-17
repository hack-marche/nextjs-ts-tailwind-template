// Libralies
import { AppProps, Container } from 'next/app'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import 'sanitize.css'
import 'react-responsive-modal/styles.css'
// lib
import '~/styles/globals.css'
import '~/lib/fa'
import { wrapper } from '~/lib/store'

dayjs.locale('ja') // use Spanish locale globally

const App = ({ Component, pageProps }: AppProps): any => (
  <Container>
    <Component {...pageProps} />
  </Container>
)

export default wrapper.withRedux(App)
