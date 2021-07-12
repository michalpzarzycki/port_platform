import {useState} from 'react'
import styles from './Navbar.module.css'
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.mainDiv}>
                <div className={styles.navbarItems}>
                    <a className={styles.imageLink}>
                        <img className={styles.navbarImg} src="https://images.pexels.com/photos/7356/startup-photos-7356.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </a>
                    <a className={styles.navTitle}>Projets</a>
                    <div className={styles.navStart}>
                    <div><a>LINK</a></div>
                    <div><a>LINK</a></div>
                    <div><a>LINK</a></div>
                    <div><a>LINK</a></div>
                    <div><a>LINK</a></div>
                    <div><a>LINK</a></div>
                    </div>
                    <div className={styles.navBurger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span style={{transform:  isMenuOpen ? "translateY(5px) rotate(45deg)" : ""}}/>
                        <span style={{opacity:  isMenuOpen ? "0" : "1"}}/>
                        <span  style={{transform:  isMenuOpen ? "translateY(-5px) rotate(-45deg)" : ""}}/>
                    </div>
                </div>
                <div className={styles.navMenu}   style={ { display: isMenuOpen ? 'block' : 'none' } }>
                    <a>LINK1</a>
                    <a>LINK2</a>
                    <a>LINK3</a>
                    <a>LINK1</a>
                    <a>LINK2</a>
                    <a>LINK3</a>
                    <a>LINK1</a>
                    <a>LINK2</a>
                    <a>LINK3</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
