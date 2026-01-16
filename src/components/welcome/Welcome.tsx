import styles from './welcome.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'
import { useNavigate } from "react-router-dom";

export function Welcome() {
    
    const navigate = useNavigate();
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.welcomeText}>
                <h1>Willkommen!</h1>
                <p>This little student project will give you the necessary information to learn the basics of riichi mahjong in the form of written rules, quizzes, videos and a little sandbox mode at the end to review everything yourself.</p>
                <PillButton text="Start Studying" stylemode="medium" onClick={() => {navigate(`/lessons`)}}/>
            </div>
            <img src="/src/assets/images/Header_Dragon.png" alt="A very cool Dragon" />  
        </section>
    )
}