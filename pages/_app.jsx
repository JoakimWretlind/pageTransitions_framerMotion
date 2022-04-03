import { AnimatePresence } from 'framer-motion'
import { Layout } from '../components/layout/layout'
import { GlobalStyle } from '../styles/globalStyle'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} router={router} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default MyApp
