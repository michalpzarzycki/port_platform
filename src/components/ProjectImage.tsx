import styles from './ProjectImage.module.css'

function ProjectImage() {
    return (
        <div className={styles.projectImageContainer}>
            <img 
                className={styles.projectImg} 
                alt="" 
                src="public\images\carouselWeather.png"/>
        </div>
    )
}


export default ProjectImage
