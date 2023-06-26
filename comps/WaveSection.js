import React from 'react';
import styles from './WaveSection.module.scss';

const WaveSection = ({ style }) => {
  return (
    <div className={styles.waveSection} style={style}>
      <div className={styles.waveImage}></div>
    </div>
  );
};

export default WaveSection;