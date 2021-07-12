import {useState} from 'react'
import Project from './Project'
import styles from './ProjectList.module.css'
//create some help in array creation
function createAnArray(length: number, mapCallback = (x: any) => x) {
let arr = []
    for(let i=0; i<length; i++) {
        arr.push(i)
}

    return arr.map(mapCallback)
}

function ProjectsList() {
    const [projects, setProjects] = useState(createAnArray(15))
    return (
        <div className={styles.projectsContainer}>
           {projects.map((project, idx) => <Project />)}
        </div>
    )
}


export default ProjectsList;