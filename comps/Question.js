import styles from './comps.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
    closed: {
        opacity: 1
    },
    open: {
        opacity: 0
    }
}

const Question = ({title, last, children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    
    const isLast = (el) => {
        let style = last ? styles.lastQuestion : styles.questions;

        return (
            <div className={style}>
                {el}
            </div>
        )
    }

    return (
        isLast(
            <>
                <h3 className={styles.question} onClick={toggleOpen}>
                    {title}
                </h3>
                {isOpen && <motion.p className={styles.answer}
                    variants={variants}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{stiffness: 100, delay: 0.1}}
                >
                    {children}
                </motion.p>
                }
            </>
        )
    );
}

export default Question;