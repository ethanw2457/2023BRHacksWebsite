import styles from './comps.module.scss';
import { useState } from 'react';

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
            {isOpen &&
            <p className={styles.answer}>
                {children}
            </p>
            }
        </div>
    );
}

export default Question;