import Navbar from "./Navbar";
import motion from 'framer-motion'

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;