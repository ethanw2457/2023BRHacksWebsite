import styles from './comps.module.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'

const elements = [
    "Registration",
    "About",
    "FAQ",
    "Schedule",
    "Sponsors",
    "Prizes",
    "Team",
]

const variants = {
    open: { x: 0 },
    closed: { x: "-100%" }
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(true);

    return (
        <motion.nav className={styles.navbar}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
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
                        {'<'}
                    </p>

                </button>
            </div>
        </motion.nav>
    )
}

export default Navbar;