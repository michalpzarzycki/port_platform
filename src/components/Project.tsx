import { Link } from 'react-router-dom'
import styles from './Project.module.css'
import ProjectImage from './ProjectImage'
import ProjectWrapper from './ProjectWrapper'

function Project({id, project}: any) {
    const {name, repository, img, demo, stack} = project
    return (
        <div className={styles.projectContainer}>
            <Link to={`/article/${id}`}>
            <article className={styles.article}>
                <ProjectImage />
                <ProjectWrapper title={name} stack={stack}/>
            </article>
            </Link>
        </div>
    )
}

export default Project
