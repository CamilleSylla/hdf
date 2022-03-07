import Nav from '../components/template/nav/Nav.jsx'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav/>
     <Component {...pageProps} />
    </>
  )
}

export default MyApp
