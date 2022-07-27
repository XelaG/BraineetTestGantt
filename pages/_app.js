// import App from 'next/app'
import "../styles/globals.css"
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import { SizeUnitsWrapper } from '../context/sizeUnits';


function MyApp({ Component, pageProps }) {
    return (
    <SizeUnitsWrapper>
      <Component {...pageProps} />
    </SizeUnitsWrapper>
  )}
  
  export default MyApp