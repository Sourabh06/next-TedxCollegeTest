import '../styles/globals.css';
import Navbar from '../pages/navbar';
import Footer from '../pages/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
