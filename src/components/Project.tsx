import { Link } from 'react-router-dom'
import styles from './Project.module.css'
import ProjectImage from './ProjectImage'
import ProjectWrapper from './ProjectWrapper'

function Project() {
    return (
        <div className={styles.projectContainer}>
            <Link to="/article/5">
            <article className={styles.article}>
                <ProjectImage />
                <ProjectWrapper />
            </article>
            </Link>
        </div>
    )
}

export default Project
