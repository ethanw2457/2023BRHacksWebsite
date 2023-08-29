import styles from './comps.module.scss'
import { color, motion } from 'framer-motion'
import { useState } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link';

const textAnimate = {
    normal: {
        // backgroundColor: ["white", "#f244e1", "#ff0066"],
        // color: ["#ff0066", "#f244e1", "white"],
        translateX: -15,
        transition: {
            duration: 0.3,
        },
        display: 'block',
    },
    side: {
        // backgroundColor: ["#ff0066", "#f244e1", "white"],
        // color: ["white", "#f244e1", "#ff0066"],
        translateX: 0,
        transition: {
            duration: 0.3,
        },
        transitionEnd: {
            display: 'block',
        },
    },
}


export const RegisterButton = () => {
    const [isHover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    const handleRegisterClick = () => {
        window.open("https://forms.gle/ZPkJYQgZSnb7UJNR6", "_blank");
    };

    return (
        <div>
            <motion.button
                className={styles.registerButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleRegisterClick}
            >
                <motion.span
                    initial="normal"
                    animate={isHover ? 'normal' : 'side'}
                    variants={textAnimate}
                >
                    Register
                </motion.span>
            </motion.button>
        </div>
    );
};