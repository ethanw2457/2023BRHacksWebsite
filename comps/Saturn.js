import React from 'react';
import { motion, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import styles from './Saturn.module.scss'; 

const Saturn = ( { style }) => {

  return (
    <motion.div className={styles.saturnContainer} style={style}>
      <img
        src='/saturn.png'
        alt="Saturn"
        className={styles.saturnImage}
      />
    </motion.div>
  );
};

export default Saturn;
