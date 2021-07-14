import {useState} from 'react'
import Project from './Project'
import styles from './ProjectList.module.css'

const allProjects = {
    0: {
        name: "Carousel Weather",
        repository: "",
        demo:'',
        img:'',
        stack:'React ES6',
        desc: 'Simple WeatherApp, '

    },
    1: {
        name: "Comment Collect Bot",
        repository: "",
        demo:'',
        img:'',
        stack: 'Node Puppeter React'
        
    },
    2: {
        name: "Sorting Algorithm",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    3: {
        name: "Path Finder",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    4: {
        name: "Pool",
        repository: "",
        demo:'',
        img:'',
        stack: 'CSS, ES6'
        
    },
    5: {
        name: "Blog",
        repository: "",
        demo:'',
        img:'',
        stack: 'NextJS, ES6'
        
    },
    6: {
        name: "Node CLI",
        repository: "",
        demo:'',
        img:'',
        stack: 'Node'
        
    },
    7: {
        name: "Email Sender",
        repository: "",
        demo:'',
        img:'',
        stack: 'Node'
        
    },
    8: {
        name: "Oly Dudes",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    9: {
        name: "Spotify Clone",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    10: {
        name: "Battery Status Monitor",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    11: {
        name: "Instagram Bot",
        repository: "",
        demo:'',
        img:'',
        stack: 'Node, Puppeteer'
        
    },
    12: {
        name: "Football",
        repository: "",
        demo:'',
        img:'',
        stack: 'CSS, ES6'
        
    },
    13: {
        name: "Big Numbers Calculator",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    },
    14: {
        name: "ES6 Chat",
        repository: "",
        demo:'',
        img:'',
        stack: 'ES6'
        
    },
    15: {
        name: "frontczewscyApp",
        repository: "",
        demo:'',
        img:'',
        stack: 'React, ES6'
        
    }}
//create some help in array creation
function convertToArray(object: any) {
    let arr = []
    for(let key in object) {
arr.push(object[key])
    }
    return arr;
}

function ProjectsList() {
    const [projects, setProjects] = useState(convertToArray(allProjects))
    return (
        <div className={styles.projectsContainer}>
           {projects.map((project, idx) => <Project project={project} id={idx}/>)}
        </div>
    )
}


export default ProjectsList;