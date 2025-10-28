import styles from './welcome.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'


export function Welcome() {
    return (
        <section className={styles.welcomeSection}>
            <h1>Willkommen!</h1>
            <p><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</em></p>
            <PillButton text="Start Studying"/>
        </section>
    )
}