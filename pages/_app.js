import "../styles/globals.css"
import { SizeUnitsWrapper } from '../context/sizeUnits';
import 'react-resizable/css/styles.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
    return (
    <SizeUnitsWrapper>
      <ToastContainer />
        <Component {...pageProps} />
    </SizeUnitsWrapper>
  )}
  
  export default MyApp