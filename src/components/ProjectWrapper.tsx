import styles from './ProjectWrapper.module.css'

function ProjectWrapper() {
    return (
        <div className={styles.postWrapperContainer}>
            <header className={styles.postHeader}>
                <span className={styles.postTag}>TITLE</span>
                <h2 className={styles.postTitle}>
                    <a className={styles.postTitleLink}>xxx</a>
                </h2>
            </header>
            <div>
                <span className={styles.desc}>DJasjfkajsdk</span>
            </div>
        </div>
    )
}

export default ProjectWrapper
