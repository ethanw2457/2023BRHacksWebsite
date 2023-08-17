import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styles from './Saturn.module.scss'; 

const Saturn = () => {
  const { scrollX } = useViewportScroll();

  const saturnX = useTransform(
    scrollX,
    [30, 500],
    [0, -500]
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
