// Navbar.js

import styles from './comps.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaInfoCircle, FaUserPlus, FaQuestionCircle, FaCalendarAlt, FaHandshake, FaGift, FaUsers } from 'react-icons/fa';

import Image from 'next/image';
import logoImage from '../public/logo.png';

const elements = [
  {
    name: "About",
    icon: <FaInfoCircle style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "about"
  },
  {
    name: "FAQ",
    icon: <FaQuestionCircle style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "faq"
  },
  {
    name: "Schedule",
    icon: <FaCalendarAlt style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "schedule"
  },
  {
    name: "",
    icon: (
      <div className={`${styles.logoWrapper} ${styles.logo}`}>
        <Image src={logoImage} alt="Logo" width={70} height={70} />
      </div>
    ),
    id: "logo"
  },
  {
    name: "Sponsors",
    icon: <FaHandshake style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "sponsors"
  },
  // {
  //   name: "Prizes",
  //   icon: <FaGift style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
  //   id: "prizes"
  // },
  {
    name: "Team",
    icon: <FaUsers style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "team"
  },
  {
    name: "Register",
    icon: <FaUserPlus style={{margin: "0.1rem 0.4rem 0.1rem"}}/>,
    id: "register"
  }
];

const Navbar = ({ isOpen, onClick, onClickTab, onMouseEnter, onMouseLeave }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredElement(id);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const handleRegisterClick = () => {
    // Open the link in a new tab
    window.open("https://forms.gle/ZPkJYQgZSnb7UJNR6", "_blank");
  };

  return (
    <div className={styles.navbarWrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.navbar}>
        {elements.map((el) => (
          <div
            className={`${styles.choice} ${hoveredElement === el.id ? styles.highlighted : ""} ${el.id === "register" ? styles.registerElement : ""}`}
            key={el.name}
            onClick={() => {
              if (el.id === "register") {
                handleRegisterClick();
              } else {
                onClickTab(el.id);
              }
            }}
            onMouseEnter={() => handleMouseEnter(el.id)}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.name}>{el.name}</span>
            {el.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;