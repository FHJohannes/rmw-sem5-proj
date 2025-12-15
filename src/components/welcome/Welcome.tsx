import styles from './welcome.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'


export function Welcome() {
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.welcomeText}>
                <h1>Willkommen!</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <PillButton text="Start Studying" darkmode={true}/>
            </div>
            <img src="/src/assets/images/Header_Dragon.png" alt="A very cool Dragon" />  
        </section>
    )
}