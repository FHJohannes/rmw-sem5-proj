import styles from './welcome.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'
import { useNavigate } from "react-router-dom";

export function Welcome() {
    
    const navigate = useNavigate();
    return (
        <section className={styles.welcomeSection}>
            <div className={styles.welcomeText}>
                <h1>Willkommen!</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <PillButton text="Start Studying" stylemode="medium" onClick={() => {navigate(`/lessons`)}}/>
            </div>
            <img src="/src/assets/images/Header_Dragon.png" alt="A very cool Dragon" />  
        </section>
    )
}