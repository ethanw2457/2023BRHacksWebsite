import styles from './comps.module.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
        id: "register"
    },
    {
        name: "Team",
        id: "team"
    }
]

const variants = {
    open: {
        rotateY: 0,
    },
    closed: {
        rotateY: 90,
    }
}

const Navbar = ({isOpen, onClick, onClickTab, onMouseEnter, onMouseLeave}) => {

    return (
        <div className={styles.navbarWrapper}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <motion.div  
                className={styles.navbar}
                animate={isOpen ? "open": "closed"}
                variants={variants}
                transition={{
                    stiffness: 100,
                    duration: 0.5,
                    delay: 0.25
                }}
        >
                {elements.map((el) => {
                    return (
                        <div className={styles.choice} key={el.name} onClick={() => onClickTab(el.id)}>
                            {el.name}
                        </div>
                    )
                })}
            </motion.div>
            <div>
            <button onClick={onClick} className={styles.button}>
          <p className={styles.buttonText}>
            {isOpen && (
              <img
                src="https://img.icons8.com/?size=512&id=40217&format=png"
                width="20"
                height="25"
                alt=">"
                style={{ marginLeft: '-3px' }} // Apply leftward movement using marginLeft
              />
            )}
            {!isOpen && (
              <img
                src="https://img.icons8.com/?size=512&id=7849&format=png"
                width="20"
                height="25"
                alt=">"
                style={{ marginLeft: '-3px' }} // Apply leftward movement using marginLeft
              />
            )}
          </p>
        </button>
      </div>
    </div>
  )
}


export default Navbar;