// Footer.js

import styles from './Footer.module.scss';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <div className={styles.footerdiv}>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />
      <footer className={styles.footer}>

        <div className={styles.icons}>

          {/* GitHub */}
          <a href="https://github.com/ethanw2457/2023BRHacksWebsite" target='_blank' rel='noopener noreferrer'>
            <motion.div
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            >
              <AiFillGithub className={styles.logo} />
            </motion.div>
          </a>

          {/* Instagram */}
          <a href='https://www.instagram.com/brhs.hacks/' target='_blank' rel='noopener noreferrer'>
            <motion.div
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            >
              <AiFillInstagram className={styles.logo} />
            </motion.div>
          </a>
        </div>

        
        <p className={styles.footercopy}>© Copyright Hack BRHS</p>
        <div className={styles.linkscontainer}>
          <a className={styles.privacy} href="https://mlh.io/privacy" target="_blank" class="privacy"><strong>Privacy Policy</strong></a>
          <span className={styles.divider}>|</span>
          <a className={styles.privacy} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" class="privacy"><strong>Code of Conduct</strong></a>
        </div>
      </footer>
    </div>
  )
}


export default Footer;