import styles from './comps.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
    closed: {
        // y : "-2rem",
        opacity: 1
    },
    open: {
        // y : 0,
        opacity: 0
    }
}

const Question = ({title, children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    

    return (
        <div className={styles.questions}>
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
        </div>
    );
}

export default Question;