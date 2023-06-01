// Navbar.js

import styles from './comps.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaInfoCircle, FaUserPlus, FaQuestionCircle, FaCalendarAlt, FaHandshake, FaGift, FaUsers } from 'react-icons/fa';

const elements = [
  {
    name: "About",
    icon: <FaInfoCircle style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "about"
  },
  {
    name: "Register",
    icon: <FaUserPlus style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "register"
  },
  {
    name: "FAQ",
    icon: <FaQuestionCircle style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "faq"
  },
  {
    name: "Schedule",
    icon: <FaCalendarAlt style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "schedule"
  },
  {
    name: "Sponsors",
    icon: <FaHandshake style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "sponsors"
  },
  {
    name: "Prizes",
    icon: <FaGift style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "prizes"
  },
  {
    name: "Team",
    icon: <FaUsers style={{marginRight: "1rem", position: "fixed"}}/>,
    id: "team"
  }
];

const variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: "-9rem",
    opacity: 0,
  }
};

const Navbar = ({ isOpen, onClick, onClickTab, onMouseEnter, onMouseLeave }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className={styles.navbarWrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <motion.div
        className={styles.navbar}
        animate={isOpen ? "open" : "closed"}
        transition={{ stiffness: 100 }}
        variants={variants}
      >
        {elements.map((el) => (
          <div
            className={`${styles.choice} ${hoveredElement === el.id ? styles.highlighted : ""}`}
            key={el.name}
            onClick={() => onClickTab(el.id)}
            onMouseEnter={() => handleMouseEnter(el.id)}
            onMouseLeave={handleMouseLeave}
          >
            {el.icon}
            <span className={styles.name}>{el.name}</span>
          </div>
        ))}
      </motion.div>
      <div>
        <button onClick={onClick} className={styles.button}>
          <p className={styles.buttonText}>
            {isOpen ? (
              <img
                src="https://img.icons8.com/?size=512&id=40217&format=png"
                width="20"
                height="25"
                alt=">"
                style={{ marginLeft: "-3px" }} // Apply leftward movement using marginLeft
              />
            ) : (
              <img
                src="https://img.icons8.com/?size=512&id=7849&format=png"
                width="20"
                height="25"
                alt=">"
                style={{ marginLeft: "-3px" }} // Apply leftward movement using marginLeft
              />
            )}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
