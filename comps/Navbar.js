import styles from './comps.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const elements = [
    "About",
    "Registration",
    "FAQ",
    "Schedule",
    "Sponsors",
    "Prizes",
    "Team",
]

const variants = {
    open: { x: "100%" },
    closed: { x: 0 }
}

const Navbar = () => {

    const  [isOpen, setIsOpen] = openClose();

    return (
        <motion.nav className={styles.navbar}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{stiffness: 100}}
        >
            { elements.map((el) => {
                return (
                    <div className={styles.choice} key={el}>
                        {el}
                    </div>
                )
            })}
            <div>
                <button onClick={() => setIsOpen(isOpen => !isOpen)} className={styles.button}>
                    <p className={styles.buttonText}>
                        {isOpen && '<'}
                        {!isOpen && '>'}
                    </p>

                </button>
            </div>
        </motion.nav>
    )
}

export const openClose = () => {
    const [isOpen, setIsOpen] = useState(false);
    return [isOpen, setIsOpen];
}

export default Navbar;