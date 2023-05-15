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


const Navbar = ({isOpen, onClick, onClickTab, onMouseEnter, onMouseLeave}) => {

    return (
        <div className={styles.navbar} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {elements.map((el) => {
                return (
                    <div className={styles.choice} key={el.name} onClick={() => onClickTab(el.id)}>
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