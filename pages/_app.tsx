import App from "next/app"
import type { AppProps , AppContext } from 'next/app'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
      <Component {...pageProps} />
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
