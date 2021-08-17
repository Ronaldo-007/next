import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import Router from 'next/router';


import ProgressBar from "@badrap/bar-of-progress";

const progres = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on('routeChangeStart', progres.start);
Router.events.on('routeChangeComplete', progres.finish);
Router.events.on('routeChangeError', progres.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
