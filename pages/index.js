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

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" }
  }

  return (
    // <Parallax pages={1.75}>
        // <ParallaxLayer offset={0.75} speed={0.5} size={0.25}>
          // <img src="/MLH.png" height="100" className={styles.mlh}/>
        // </ParallaxLayer>
        // <ParallaxLayer offset={0} speed={0} size={2} pages>
        <>
          <Navbar/>
          <motion.div className={styles.flex}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{stiffness: 100}}
          >
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
          </motion.div>
        {/* </ParallaxLayer> */}
    {/* </Parallax> */}
    </>
  )
}
