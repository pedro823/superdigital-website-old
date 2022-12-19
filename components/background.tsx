import styles from '../styles/Home.module.css'

export default function Background() {
    return (
        <video autoPlay muted loop className={styles.bgVideo}>
            <source type="video/mp4" src="bg-noise.mp4" />
        </video>
    )
}