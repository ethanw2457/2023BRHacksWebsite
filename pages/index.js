import styles from './index.module.scss'
import Registration from '../comps/Registration'
import Schedule from '../comps/Schedule'
import { openClose } from '../comps/Navbar.js'
import { motion } from 'framer-motion'
import Question from '../comps/Question'
import Navbar from '../comps/Navbar.js'
import Team from '../comps/Team'
import { RegisterButton } from '../comps/RegisterButton'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { ParallaxBanner } from 'react-scroll-parallax'
import { useState } from 'react'

const variants = {
  open: { x: "9rem" },
  closed: { x: 0 }
}

const opacity = {
  open: {opacity: 0.5},
  closed: {opacity: 1}
}

export default function Home() {
  // const isOpen = true;
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{stiffness: 100}}
    >
      <Navbar isOpen={isOpen} onClick={() => setIsOpen(isOpen => !isOpen)}/>
      <motion.div className={styles.wrapper}
        animate={isOpen ? "open" : "closed"}
        variants={opacity}
      >
          {/* <div className={styles.wrapper}> */}
            <header>
              <motion.svg
              width="300"
              height="200"
              viewBox="0 0 200 100"
              initial="hidden"
              animate="visible"
              className={styles.svg}
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
              </motion.svg>
              <h1 className={styles.frontTitle}>
                Hack BRHS
              </h1>
              <img src="/Layer1.svg" className={styles.l1}/>
              <img src="/Layer2.svg" className={styles.l2}/>
              <img src="/Layer3.svg" className={styles.l3}/>
              <img src="/Layer4.svg" className={styles.l4}/>
            </header>
          {/* </div> */}
        {/* <div> */}
        <section className={styles.content}>
          <div className={styles.title} id="about">
            <h1 className={styles.titleText}>
              Hack BRHS 2023
            </h1>
            <p className={styles.paragraph}>
              Hack BRHS is an event taking place in 2023. It will have coding and many people will be involved.
            </p>
            <RegisterButton/>
          </div>
        </section>
        <section className={styles.secondaryContent}>
          <div className={styles.titleSecondary} id="faq">
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
        </section>
        <section className={styles.tertiaryContent}>
          <Schedule/>
        </section>
        <section className={styles.content}>
          <Team/>
        </section>
        {/* <section className={styles.sponsors}>
              <img src="/LayerR1.svg" className={styles.l1}/>
              <img src="/LayerR2.svg" className={styles.l2}/>
              <img src="/LayerR3.svg" className={styles.l3}/>
              <img src="/LayerR4.svg" className={styles.l4}/>
              <section className={styles.bottomTitle}>
                <h1>
                  Sponsors
                </h1>
              </section>
        </section> */}
        {/* <section>
          <h1>
            Sponsors
          </h1>
        </section> */}
              <Registration title="Registration" desc="Pls register"/>

        {/* </div> */}
      </motion.div>
    </motion.nav>
  )
}
