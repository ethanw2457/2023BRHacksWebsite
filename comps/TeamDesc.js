import styles from './TeamDesc.module.scss'

const TeamDesc = ({name, desc, src}) => {
    return (
        <div className={styles.card}>
            {src != "" && <img width="100" src={src}/>}
            {src == "" && <img width="100" src="/vercel.svg"/>}
            <h3 className={styles.name}>
                {name}
            </h3>
            <p className={styles.desc}>
                {desc}
            </p>
        </div>
    )
}

export default TeamDesc;