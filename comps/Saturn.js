import React from 'react';
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from './Saturn.module.scss'; 

const Saturn = () => {
  const { scrollX } = useScroll();

  // const saturnX = useTransform(
  //   scrollX,
  //   [30, 500],
  //   [0, -500]
  // );

  return (
    <motion.div className={styles.saturnContainer} style={{ x: scrollX }}>
      <img
        src='/saturn.png'
        alt="Saturn"
        className={styles.saturnImage}
      />
    </motion.div>
  );
};

export default Saturn;
