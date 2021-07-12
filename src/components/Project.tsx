import styles from './Project.module.css'
import ProjectImage from './ProjectImage'
import ProjectWrapper from './ProjectWrapper'

function Project() {
    return (
        <div className={styles.projectContainer}>
            <article className={styles.article}>
                <ProjectImage />
                <ProjectWrapper />
            </article>
        </div>
    )
}

export default Project
