// Sponsors.js

import styles from './Sponsors.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Sponsors = () => {
  const sponsorsRef = useRef(null);
  const controls = useAnimation();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let height = 1;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log("Entries: ");
        console.log(entry);
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('visible');
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
      <h1 className={styles.sponsorsTitle}>Sponsors</h1>
      <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>
        {/* Qualcomn */}
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
            />
          </motion.a>
        </motion.div>

        {/*Women in STEM */}
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

        {/* echo3D */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.echo3d.com/"
            whileHover={{ scale: 1.1 }} // You can adjust the hover scale effect if needed
            whileTap={{ scale: 0.9 }} // You can adjust the tap scale effect if needed
          >
            <motion.img
              src="echo3D-Logo.png" // Replace with the actual image filename of the echo3D logo
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

      </div>

      <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>
        {/* Bridgewater Acura */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.bridgewateracura.com/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="bdacura.png"
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

        {/* Ray Catena Bridgewater */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.raycatena.com/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="rayCatena.png"
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

        {/* Eye Level */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.myeyelevel.com/US/index.do"
            whileHover={{ scale: 1.1 }} // You can adjust the hover scale effect if needed
            whileTap={{ scale: 0.9 }} // You can adjust the tap scale effect if needed
          >
            <motion.img
              src="eyeLevel.png" // Replace with the actual image filename of the echo3D logo
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

      </div>



      <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>
        {/* XYZ Domain */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://gen.xyz/"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="xyz.png"
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




      </div>




    </div>
  );



};

export default Sponsors;
