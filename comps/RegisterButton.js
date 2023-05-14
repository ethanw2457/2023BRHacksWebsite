import styles from './comps.module.scss'
import { color, motion } from 'framer-motion'
import { useState } from 'react'
import { withRouter } from 'next/router'

const textAnimate = {
    normal: {
        // backgroundColor: ["white", "#f244e1", "#ff0066"],
        // color: ["#ff0066", "#f244e1", "white"],
        translateX: 12,
    },
    side: {
        // backgroundColor: ["#ff0066", "#f244e1", "white"],
        // color: ["white", "#f244e1", "#ff0066"],
        translateX: 0,
    },
}

export const RegisterButton = () => {

    const [isHover, setHover] = useState(false);

    return (
        <div>
            <motion.button className={styles.registerButton}
                initial='normal'
                animate={isHover ? 'side' : 'normal'}
                variants={textAnimate}
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
            >
                Register
            </motion.button>
        </div>
    )
}