import styles from './index.module.scss';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';


const test = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref
    });
    return (
        <>
        <motion.div
            className={styles.progressbar}
            style={{ scaleX: scrollYProgress }}
        />
        <div style={{height: "1000vh"}}>

        </div>
      </>

    )
}

export default test;