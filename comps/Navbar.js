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
        id: "register"
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
    open: { x: "100%" },
    closed: { x: 0 }
}

const Navbar = () => {

    const [isOpen, setIsOpen] = openClose();
    const [doc, setDoc] = useState(null);

    const scroll = (id) => {
        if (doc) {
            const el = doc.getElementById(id);
            try {
                el.scrollIntoView({behavior : "smooth"});
                console.log("Element selected: " + el.id);
            } catch(e) {
                console.log(e);
            }
        }
    }

    useEffect(() => {
        setDoc(document);
    }, [])

    return (
        <motion.nav className={styles.navbar}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{stiffness: 100}}
        >
            { elements.map((el) => {
                return (
                    <div className={styles.choice} key={el.name} onClick={() => scroll(el.id)}>
                        {el.name}
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