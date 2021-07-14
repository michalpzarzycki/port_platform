import styles from './ProjectWrapper.module.css'

function ProjectWrapper({title, stack}: any) {
    return (
        <div className={styles.postWrapperContainer}>
            <header className={styles.postHeader}>
                <span className={styles.postTag}>{stack}</span>
                <h2 className={styles.postTitle}>
                    <span className={styles.postTitleLink}>{title}</span>
                </h2>
            </header>
            <div>
                <button className={styles.projectBtn}>VIEW DEMO</button>
                <button className={styles.projectBtn}>REPO</button>
            </div>
            <div>
                <span className={styles.desc}>DJasjfkajsdk</span>
            </div>
        </div>
    )
}

export default ProjectWrapper
