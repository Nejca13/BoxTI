import NavBar from '../components/NavBar/NavBar'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Nejca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/IconBoxIT.svg" />
      </Head>
    <Component {...pageProps} />
    </>
  )
  
}

export default MyApp
