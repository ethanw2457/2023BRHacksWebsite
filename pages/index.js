import styles from './index.module.scss';
import Registration from '../comps/Registration';
import Schedule from '../comps/Schedule';
import Sponsors from '../comps/Sponsors';
import { openClose } from '../comps/Navbar.js';
import { motion } from 'framer-motion';
import Question from '../comps/Question';
import Navbar from '../comps/Navbar.js';
import Team from '../comps/Team';
import Saturn from '../comps/Saturn.js';
import { RegisterButton } from '../comps/RegisterButton';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ParallaxBanner } from 'react-scroll-parallax';
import { useState, useRef, useEffect} from 'react';
import { useScroll, useMotionValueEvent} from 'framer-motion';
import Down from '../comps/Down';
import WaveSection from '../comps/WaveSection';
import Footer from '../comps/Footer';

const variants = {
  open: { x: "9rem" },
  closed: { x: 0 }
};

const centerVariants = {
  open: { opacity: 0.5 },
  closed: { opacity: 1 }
};


export default function Home() {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref
  });
  const [hookedYPosition, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
    console.log("Page scroll:", latest);
  })

  const [isOpen, setIsOpen] = useState(false);
  const [doc, setDoc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setDoc(document);
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1000px)').matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scroll = (id) => {
    if (doc) {
      const el = doc.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        console.log("Element selected: " + el.id);
        setIsOpen(false);
      }
    }
  };

  
  const scrollBottom = (id) => {
    if (doc) {
      const el = doc.getElementById(id);
      try {
        el.scrollIntoView({ behavior: "smooth" });
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
    <div>
      <motion.div
        className={styles.progressbar}
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar isOpen={isOpen} onClickTab={scroll}/>
      {/* <motion.div className={styles.wrapper}> */}
        <Down onClick={() => scrollBottom('about')} />
        <div className={styles.backdrop}> 
          <h1 className={styles.frontTitle}>
            Hack BRHS
          </h1>
        </div>
        <p className={styles.credit}>
          <a href="https://www.freepik.com/free-vector/metropolis-night-landscape-neon-cartoon-vector_4393824.htm#query=cyberpunk%20city&position=0&from_view=keyword&track=ais">Image by vectorpocket</a> on Freepik
        </p>
      
        <img src="/LayerR4.svg" className={styles.transition}/>
        {/* <section className={`${styles.content} ${styles.topspace}`} id="about"> */}
          <div className={styles.titleWrapper}>
          <div className={styles.title}>
            <h1 className={styles.titleText}>
              Hack BRHS 2023
            </h1>
            <p className={styles.paragraph}>
            In fall 2023, C.O.D.E. Club will hold the Bridgewater-Raritan HS Hackathon: a full-day, in-person event where 100+ high school students from around New Jersey collaborate to create STEM-related projects to serve their community. This event has already been approved by the BRHS administration and the CODE club team is currently planning it. During the event, participants work in teams to engineer quantum AI databases, create mini-startup companies, program stock robot predictors, create mobile apps to help people take their diabetes medication on time, design climate-friendly solutions, etc.
            </p>
            <p className={styles.paragraph}>
            Essentially this hackathon is a way for students to explore the boundaries of their imagination and achieve them through hard work and determination. In addition to the main competition, CODE Club will also be conducting various workshops in conjunction with other computer science clubs at BRHS.
            </p>
            <RegisterButton />
          </div>
          </div>
        {/* </section> */}
        {/* <section className={styles.secondaryContent}> */}
          <div className={styles.titleSecondary} id="faq">
            <h1 className={styles.faq}>
              FAQ
            </h1>
            <div className={styles.dark}>
              <Question title="What time does registration start?">
                Registration starts at 9 AM.
              </Question>
              <Question title="Where is the Hackathon?">
                The Hackathon will be hosted in the main building of Bridgewater-Raritan High School. The address is: 600 Garretson Road, Bridgewater, NJ, 08807.
              </Question>

              <Question title="When will the Hackathon be?">
                Fall of 2023
              </Question>

              <Question title="Where should I register?">
                <a href="https://forms.gle/ZPkJYQgZSnb7UJNR6" target="_blank" rel="noopener noreferrer style"> <u>Register Here</u></a>
              </Question>

              <Question title="What should I bring?">
                Bring your computer, charger, snacks, and any other electronics you may need.
              </Question>
              <Question title="Is there a fee for participation?">
                No, everything (including food!) is free, thanks to our wonderful sponsors.
              </Question>
              <Question title="Can I participate if I am new to Hackathons?">
                Yes! We will have plenty of beginner-friendly events, workshops, and competitions for you to join.
              </Question>
              <Question title="What can I learn?">
                We have a variety of events rich with content. These events include topics from computer science, business, psychology, and more. You can check out our events below on our website.
              </Question>
              <Question title="Do I need a team?">
                You are not required to have a team. We will have opportunities for you during the competition to network and form your own teams at the Hackathon.
              </Question>
              <Question title="Will there be food?">
                Yes! We will have snacks and drinks throughout the Hackathon. We will also serve lunch and dinner.
              </Question>
              <Question title="What prizes will there be?">
                To be decided, but they will be very well-worth it!
              </Question>
              <Question title="Who can attend?">
                Any high schooler is free to join regardless of where you are from.
              </Question>
              <Question title="I have another question.">
                We would be happy to help you. You can contact us with your question at <a href="mailto:brhacks.team@gmail.com">brhacks.team@gmail.com</a>.
              </Question>

            </div>
          </div>
        {/* </section> */}

        {/* <section className={styles.tertiaryContent}> */}
          <Schedule />
        {/* </section> */}

        {/* <Saturn /> */}

        {/* <section className={styles.secondaryContent}> */}
          <Team />
        {/* </section> */}
        {/* <section id="sponsors" className={styles.sponsors}> */}
          <Sponsors />
        {/* </section> */}
        <img width="100%" src="3161-removebg.png" className={styles.buildings} style={{bottom: `${-hookedYPosition * 300 + 10}vh`}} alt="Building" />
        <img src="/Layer1.svg" className={styles.l1} alt="Layer 1" style={{bottom: `${-hookedYPosition * 300 - 30}vh`}}/>
        <img src="/Layer2.svg" className={styles.l2} alt="Layer 2" style={{bottom: `${-hookedYPosition * 200 - 30}vh`}}/>
        <img src="/Layer3.svg" className={styles.l3} alt="Layer 3" style={{bottom: `${-hookedYPosition * 100 - 30}vh`}}/>
        <img src="/Layer4.svg" className={styles.l4} alt="Layer 4" style={{bottom: `${hookedYPosition * 20 -20}vh`}}/>

        <img src="/B4.png" width="250px" className={styles.building} onClick={() => scroll('faq')} style={{bottom: `${hookedYPosition * 500 - 200}vh`, left: `${hookedYPosition * 500 - 200}vw`}}/>
        <img src="/B2.png" width="250px" className={styles.building} onClick={() => scroll('sponsors')} style={{bottom: `${hookedYPosition * 500 - 40}vh`, left: `${hookedYPosition * 500 - 40}vw`}}/>
        <img src="/B1.png" width="250px" className={styles.building} onClick={() => scroll('about')} style={{bottom: `${hookedYPosition * 500 - 80}vh`, left: `${hookedYPosition * 500 - 80}vw`}}/>
        <img src="/B5.png" width="250px" className={styles.building} onClick={() => scroll('about')} style={{bottom: `${hookedYPosition * 500 - 120}vh`, left: `${hookedYPosition * 500 - 120}vw`}}/>
        <img src="/B3.png" width="250px" className={styles.building} onClick={() => scroll('prizes')} style={{bottom: `${hookedYPosition * 500 - 160}vh`, left: `${hookedYPosition * 500 - 160}vw`}}/>

        {/* <Registration title="Questions?" desc="Pls register" /> */}

        <Footer />

      {/* </motion.div> */}
      </div>
  );
}
