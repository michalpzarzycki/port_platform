import styles from './ProjectImage.module.css'

function ProjectImage() {
    return (
        <div className={styles.projectImageContainer}>
            <div>
                <a>
                    <img className={styles.projectImg} src="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                </a>
            </div>
        </div>
    )
}

export default ProjectImage
