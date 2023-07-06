import styles from './Sponsors.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const Sponsors = () => {
    const sponsorsRef = useRef(null);
    const controls = useAnimation();
    // const [height, setHeight] = useState(1);
    const [scale, setScale] = useState(1);


    useEffect(() => {
      let height = 1;

      if (window.matchMedia('(max-width: 1000px)').matches) {
        height = 0.5;        
      }  

      if (window.matchMedia('(max-width: 600px)').matches) {
        setScale(0.75);
        // setHeight(0.25);
      } 

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          console.log("Entries: ");
          console.log(entry);
          if (entry.isIntersecting) {
            controls.start('visible');
          } else {
            controls.start('hidden');
          }
        },
        {
          threshold: height, 
        }
      );
  
      if (sponsorsRef.current) {
        observer.observe(sponsorsRef.current);
      }
  
      return () => {
        if (sponsorsRef.current) {
          observer.unobserve(sponsorsRef.current);
        }
      };
    }, []);
  
    return (
      <div className={styles.sponsorsWrapper}>
        <h1 className={styles.sponsorsTitle}>
         Sponsors
        </h1>
        <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>
          <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
            <motion.a
              href="https://www.qualcomm.com/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="Qualcomm-Logo.png"
                width={`${300 * scale}px`}
                className={styles.logo}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              />
            </motion.a>
          </motion.div>

          <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
            <motion.a
              href="https://womeninstem.org/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="medium.png"
                className={styles.logo}
                initial="hidden"
                width={`${300 * scale}px`}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </ div>
    );
}

export default Sponsors;