import "../styles/globals.css"
import { SizeUnitsWrapper } from '../context/sizeUnits';
import 'react-resizable/css/styles.css'

function MyApp({ Component, pageProps }) {
    return (
    <SizeUnitsWrapper>
      <Component {...pageProps} />
    </SizeUnitsWrapper>
  )}
  
  export default MyApp