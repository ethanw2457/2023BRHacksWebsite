import styles from './index.module.scss';
import Registration from '../comps/Registration';
import Schedule from '../comps/Schedule';
import Sponsors from '../comps/Sponsors';
import { openClose } from '../comps/Navbar.js';
import { motion } from 'framer-motion';
import Question from '../comps/Question';
import Navbar from '../comps/Navbar.js';
import Team from '../comps/Team';
import { RegisterButton } from '../comps/RegisterButton';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxBanner } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Down from '../comps/Down';
import WaveSection from '../comps/WaveSection';

const variants = {
  open: { x: "9rem" },
  closed: { x: 0 }
};

const centerVariants = {
  open: { opacity: 0.5 },
  closed: { opacity: 1 }
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [doc, setDoc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const scroll = (id) => {
    if (doc) {
      const el = doc.getElementById(id);
      try {
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        console.log("Element selected: " + el.id);
      } catch (e) {
        console.log(e);
      }
    }

    setIsOpen(false);
  };

  const scrollBottom = (id) => {
    if (doc) {
      const el = doc.getElementById(id);
      try {
        el.scrollIntoView({ behavior: "smooth", inline: "center" });
        console.log("Element selected: " + el.id);
      } catch (e) {
        console.log(e);
      }
    }

    setIsOpen(false);
  };

  useEffect(() => {
    setDoc(document);
    if (window.matchMedia('(max-width: 1000px)').matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

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
      transition={{ stiffness: 100 }}
    >
      <Navbar isOpen={isOpen} onClickTab={scroll} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} />
      <motion.div className={styles.wrapper}
        animate={isOpen ? "open" : "closed"}
        variants={centerVariants}
        transition={{ stiffness: 100 }}
      >
        <Down onClick={() => scrollBottom('about')} />

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
          <img width="100%px" src="3161-removebg.png" className={styles.building} alt="Building" />
          <img src="/Layer1.svg" className={styles.l1} alt="Layer 1" />
          <img src="/Layer2.svg" className={styles.l2} alt="Layer 2" />
          <img src="/Layer3.svg" className={styles.l3} alt="Layer 3" />
          <img src="/Layer4.svg" className={styles.l4} alt="Layer 4" />
          <p className={styles.credit}>
            <a href="https://www.freepik.com/free-vector/metropolis-night-landscape-neon-cartoon-vector_4393824.htm#query=cyberpunk%20city&position=0&from_view=keyword&track=ais">Image by vectorpocket</a> on Freepik
          </p>
        </header>

        <section className={`${styles.content} ${styles.topspace}`} id="about">
          <div className={styles.title}>
            <h1 className={styles.titleText}>
              Hack BRHS 2023
            </h1>
            <p className={styles.paragraph}>
              Hack BRHS is an event taking place in 2023. It will have coding and many people will be involved.
            </p>
            <RegisterButton />
          </div>
        </section>

        <WaveSection style={{ bottom: '300px' }} />


        <section className={styles.secondaryContent}>
          <div className={styles.titleSecondary} id="faq">
            <h1 className={styles.faq}>
              FAQ
            </h1>
            <div className={styles.dark}>
              <Question title="How do I register?">
                Just Sign Up!
              </Question>
              <Question title="How do I get good at coding?">
                Just improve your skills and learn from YouTube.
              </Question>
              <Question title="Should I join CWAP?">
                Yes, of course!
              </Question>
              <Question title="What kind of workshops are there?" last>
                There are a large variety of workshops.
              </Question>
            </div>
          </div>
        </section>

        <section className={styles.tertiaryContent}>
          <Schedule />
        </section>

        <section className={styles.secondaryContent}>
          <Team />
        </section>

        <WaveSection />

        <section id="sponsors" className={styles.sponsors}>
          <Sponsors />
        </section>

        <Registration title="Questions?" desc="Pls register" />
      </motion.div>
    </motion.nav>
  );
}
