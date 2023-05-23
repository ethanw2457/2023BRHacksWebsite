import '../styles/globals.scss'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '../comps/Layout'
import Navbar from '../comps/Navbar'

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
