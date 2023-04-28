import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import styles from './LRButton.module.scss'

const LRButton = ({ onClick, left, right}) => {

    if (left) {
        return (
            <button onClick={onClick}  className={styles.left}>
                <AiFillLeftCircle color="white" size="25px" className={styles.icon}/>
            </button>
        )
    } else {
        return (
            <button onClick={onClick} icon={AiFillRightCircle} className={styles.right}>
                <AiFillRightCircle color="white" size="25px" className={styles.icon}/>
            </button>
        )
    }
}

export default LRButton;