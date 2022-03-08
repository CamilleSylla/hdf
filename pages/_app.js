import { NavProvider } from "../components/context/NavContext.js";
import Nav from "../components/template/nav/Nav.jsx";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavProvider>
        <Nav />
        <Component {...pageProps} />
      </NavProvider>
    </>
  );
}

export default MyApp;
