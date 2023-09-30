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
            target='_blank'
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
            target='_blank'
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
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.img
              src="echo3D-Logo.png" 
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
            target='_blank'
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
            target='_blank'
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
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.img
              src="eyeLevel.png" 
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
        {/* Interview Cake */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.interviewcake.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="interview+cake.png"
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

        {/* Taskade */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.taskade.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="taskade.png"
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

        {/* Sticker Giant */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.stickergiant.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.img
              src="stickerGiant.webp"
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
        {/* Axure */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.axure.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="axure.svg"
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

        {/* Wolfram */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.wolfram.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="wolfram.png"
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

        {/* Coding Ninjas Bridgewater */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.codeninjas.com/nj-bridgewater"
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="cNinjas.jpeg"
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
        {/* Zoned */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://zonedinc.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="zoned.png"
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

        {/* Carneigie Evaluations */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://carnegieevaluations.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="careval.png"
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

        {/* April Ludwig Photography */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.aprilludwig.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.img
              src="alp.jpeg" 
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
        {/* FSTONE */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.fstonetechnologies.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="fstone.png"
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

        {/* Gold's Gym */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.goldsgym.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="golds.png"
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

        {/* Mathnasium */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.mathnasium.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
          >
            <motion.img
              src="maths.jpeg" 
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
        {/* Carousel of Flowers NJ */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.carouselflowersnj.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="cof.png"
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

        {/* Jetbrains */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.jetbrains.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="jetbrains.webp"
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

        {/* Interview Buddy */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.jetbrains.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="intbdd.png"
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


      <div className={`${styles.displayBox} ${styles.sponsorsSection}`} ref={sponsorsRef}>


        {/* Balsamiq */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://balsamiq.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="balsamiq.png"
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


        {/* XYZ Domain */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://gen.xyz/"
            target='_blank'
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

        {/* Krizzan Consulting */}
        <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
          <motion.a
            href="https://www.cryocontouringstudio.com/"
            target='_blank'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src="cyro-ccc.jpeg"
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

          {/* Clerical Plus */}
          <motion.div className={`${styles.logoWrapper} ${styles.card}`}>
              <motion.a
                  href="http://clericalplus.com/"
                  target='_blank'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
              >
                  <motion.img
                      src="cp.jpg"
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
