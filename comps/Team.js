import styles from './comps.module.scss'

const Team = () => {
    return (
        <div className={styles.title}>
        <h1 className={styles.titleText}>
          Team
        </h1>
        <p className={styles.paragraph}>
          This is our team
        </p>
      </div>
    );
}

export default Team;