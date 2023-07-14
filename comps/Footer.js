
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={styles.footerdiv}>
            <script src="./hello.js" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />
            <footer className={styles.footer}>
                <p className={styles.viewfooter}><strong>View us on our Medias!</strong></p>
                <a className={styles.footera} href="https://www.instagram.com/brhs.hacks/" target="_blank">
                    <i class="fa-brands fa-square-instagram" className={styles.footerimage}></i>
                </a>
                <a className={styles.footera} href="https://www.linkedin.com/company/brhs-hackathon" target="_blank" class="image">
                    <i class="fa-brands fa-linkedin" className={styles.footerimage}></i>
                </a>
                <a className={styles.footera} href="https://github.com/ethanw2457/2023BRHacksWebsite" target="_blank" class="image">
                    <i class="fa-brands fa-github" className={styles.footerimage}></i>
                </a>
                <p className={styles.footercopy}><strong>© Copyright Hack BRHS</strong></p>
                <div className={styles.linkscontainer}>
                    <a className={styles.privacy} href="https://mlh.io/privacy" target="_blank" class="privacy"><strong>Privacy Policy</strong></a>
                    <span className={styles.divider}>|</span>
                    <a className={styles.privacy} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" class="privacy"><strong>Code of Conduct</strong></a>
                </div>
            </footer>
        </div>
    )
}


export default Footer;