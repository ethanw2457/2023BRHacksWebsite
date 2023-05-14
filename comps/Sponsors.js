import styles from './Sponsors.module.scss';
import { motion } from 'framer-motion';


const Sponsors = () => {
    return (
        <>
            <h1 className={styles.sponsorsTitle}>
                Sponsors
            </h1>
            <div className={styles.displayBox}>
                <img width="300px"src="Qualcomm-Logo.png" className={styles.logo}>
                    {/* <span className={styles.logoWrappr}/> */}
                </img>
                {/* <span className={styles.logoWrapper}> */}
                    <img src="MLH.png" width="300px" className={styles.logo}/>
                {/* </span> */}
            </div>
            <div className={styles.displayBox}>
                {/* <span className={styles.logoWrapper}> */}
                <img src="medium.png" className={styles.logo}/>
                {/* </span> */}
            </div>
        </>
    )
}

export default Sponsors;