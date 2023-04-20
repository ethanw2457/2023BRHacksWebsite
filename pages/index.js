import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.flex}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>
          Hack BRHS 2023
        </h1>
        <p className={styles.paragraph}>
          Hack BRHS is an event taking place in 2023. It will have coding and many people will be involved.
        </p>
      </div>
    </div>
  )
}
