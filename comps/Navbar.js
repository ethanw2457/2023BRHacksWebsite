import styles from './comps.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const elements = [
  {
    name: "About",
    id: "about"
  },
  {
    name: "Registration",
    id: "register"
  },
  {
    name: "FAQ",
    id: "faq"
  },
  {
    name: "Schedule",
    id: "schedule"
  },
  {
    name: "Sponsors",
    id: "sponsors"
  },
  {
    name: "Prizes",
    id: "prizes"
  },
  {
    name: "Team",
    id: "team"
  }
];

const variants = {
  open: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.25
    }
  },
  closed: {
    rotateY: 90,
    opacity: 0,
    transition: {
      duration: 0.3
    }
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
            {el.name}
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
