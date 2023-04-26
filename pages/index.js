import styles from './index.module.scss'
import Registration from '../comps/Registration'
import Schedule from '../comps/Schedule'
import { openClose } from '../comps/Navbar.js'
import { motion } from 'framer-motion'
import Question from '../comps/Question'
import Navbar from '../comps/Navbar.js'
import Team from '../comps/Team'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { ParallaxBanner } from 'react-scroll-parallax'

export default function Home() {
  const isOpen = true;

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <>
      <Navbar/>
      <div className={styles.svg}>
        <motion.svg
        width="400"
        height="400"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
            className={styles.circle}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
            className={styles.line}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
            className={styles.line}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
            className={styles.rect}
          />
        </motion.svg>
      </div>
      {/* <div> */}
        <div className={styles.title}>
          <h1 className={styles.titleText}>
            Hack BRHS 2023
          </h1>
          <p className={styles.paragraph}>
            Hack BRHS is an event taking place in 2023. It will have coding and many people will be involved.
          </p>
        </div>
        <div className={styles.titleSecondary}>
          <h1 className={styles.titleText}>
            FAQ
          </h1>
          <div className={styles.dark}>
            <Question title="How do I register?">
                Just Sign Up!
            </Question>
            <Question title="How do I get good at coding?">
                Just improve your skills and learn from youtube
            </Question>
            <Question title="Should I join CWAP?">
                Yes of Course!
            </Question>
            <Question title="What kind of workshops are there?">
                There are a large variety of workshops.
            </Question>
          </div>
        </div>
        <Schedule/>
        <Team/>
        <Registration title="Registration" desc="Pls register"/>
      {/* </div> */}
    </>
  )
}
