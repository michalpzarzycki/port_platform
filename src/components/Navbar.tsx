import styles from './Navbar.module.css'
function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.mainDiv}>
                <div className={styles.navbarItems}>
                    <a className={styles.imageLink}>
                        <img className={styles.navbarImg} src="https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </a>
                    <a className={styles.navTitle}>Projets</a>
                    <div className={styles.navBurger}>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
