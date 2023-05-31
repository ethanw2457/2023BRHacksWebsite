import { AiFillDownCircle } from "react-icons/ai"
import styles from './comps.module.scss'

const Down = ({onClick}) => {
    return (
        <AiFillDownCircle size="2rem" onClick={onClick} id="down" className={styles.down}/>
    )
}

export default Down;