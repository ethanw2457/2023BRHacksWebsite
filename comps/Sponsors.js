import styles from './Sponsors.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';


const Sponsors = () => {
    const sponsorsRef = useRef(null);
    const controls = useAnimation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            controls.start('visible');
          } else {
            controls.start('hidden');
          }
        },
        {
          threshold: 1, 
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
      <>
        <h1 className={styles.sponsorsTitle}>
          Sponsors
        </h1>
        <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>
          <motion.div className={styles.logoWrapper}>
            <motion.a
              href="https://www.qualcomm.com/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="Qualcomm-Logo.png"
                width="300px"
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
          <motion.div className={styles.logoWrapper}>
            <motion.a
              href="https://mlh.io/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="MLH.png"
                width="300px"
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
          <motion.div className={styles.logoWrapper}>
            <motion.a
              href="https://womeninstem.org/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="medium.png"
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
        </div>
      </>
    );
}

export default Sponsors;