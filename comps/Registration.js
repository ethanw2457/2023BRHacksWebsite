import styles from './comps.module.scss'

const Registration = ({title, desc}) => {
    return (
        <div className={styles.register} id="register">
            <form className={styles.form}>
                <h1 className={styles.titleRegistration}>
                    {title}
                </h1>
                {/* <label for="fname">First name:</label> */}
                <div className={styles.formGroup1}>
                    <input type="text" placeholder="First Name" className={styles.inputLeft}/>
                    {/* <label for="lname">Last name:</label> */}
                    <input type="text" placeholder="Last Name" className={styles.inputRight}/>
                </div>
                <input type="text" placeholder="Email" className={styles.email}/>
                {/* <div className={styles.formGroup1}> */}
                <textarea cols="30" rows="4" type="text" placeholder="Message" className={styles.message}/>
                    <button className={styles.submitButton}> Submit </button>
                    <p className={styles.smallText}>
                        *Please check your email for confirmation
                    </p>
                {/* </div> */}
            </form>
        </div>
    );
}

export default Registration;