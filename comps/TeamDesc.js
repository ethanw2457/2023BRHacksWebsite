// TeamDesc.js

import styles from './TeamDesc.module.scss'
import { motion } from 'framer-motion'

const TeamDesc = ({ name, desc, src }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1] }}
      transition={{ stiffness: 100, delay: 0.25 }}
    >
      {src !== "" ? (
        <img
          className={styles.teamPicture}
          src={src}
          alt={name}
        />
      ) : (
        <img
          className={styles.teamPicture}
          src="/PFP_EmptyAvatar.png"
          alt={name}
        />
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>
    </motion.div>
  )
}

export default TeamDesc;
