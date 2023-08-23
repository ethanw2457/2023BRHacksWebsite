// Question.js

import styles from './Question.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DownArrowIcon from '/public/whiteDownArrow.png'; 


const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Question = ({ title, last, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isLast = (el) => {
    let style = last ? styles.lastQuestion : styles.questions;

    return (
      <div className={style} onClick={toggleOpen}>
        {el}
      </div>
    );
  };

  return (
    isLast(
      <>
        <h3 className={styles.question}>{title}</h3>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.answerWrapper}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.3 }} // Adjust the transition duration as needed
            >
              <motion.p className={styles.answer}>{children}</motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  );
}

export default Question;
