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


const Navbar = ({isOpen, onClick, onHover}) => {

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
        <div className={styles.navbar} onMouseEnter={onHover} onMouseLeave={onHover}>
            {elements.map((el) => {
                return (
                    <div className={styles.choice} key={el.name} onClick={() => scroll(el.id)}>
                        {el.name}
                    </div>
                )
            })}
            <div>
                <button onClick={onClick} className={styles.button}>
                    <p className={styles.buttonText}>
                        {isOpen && '<'}
                        {!isOpen && '>'}
                    </p>

                </button>
            </div>
        </div>
    )
}


export default Navbar;