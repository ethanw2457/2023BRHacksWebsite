import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styles from './Saturn.module.scss'; // Adjust the import path based on your directory structure

const Saturn = () => {
  const { scrollY } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Determine the scroll position of the 'FAQ' section
      const faqSectionPosition = document.getElementById('faq').offsetTop;

      // Update the 'currentSection' state when passing the 'FAQ' section
      if (scrollY.current >= faqSectionPosition) {
        setCurrentSection('faq');
      } else {
        setCurrentSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  const animationRange = currentSection === 'faq' ? [0, 500] : [0, 0]; // Adjust the animation range as needed

  const saturnX = useTransform(
    scrollY,
    animationRange,
    [0, -500] // Adjust the animation values as needed
  );

  return (
    <motion.div className={styles.saturnContainer} style={{ x: saturnX }}>
      <img
        src='/saturn.png'
        alt="Saturn"
        className={styles.saturnImage}
      />
    </motion.div>
  );
};

export default Saturn;
