import Mainlayout from '@/src/components/layout/Main-layout'

import '@/styles/general.sass'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </>
  )
}
