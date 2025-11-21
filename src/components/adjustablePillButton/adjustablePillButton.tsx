import styles from './adjustablePillButton.module.css'

interface props{
    text: string;
    darkmode: boolean;
    icon: string;
}

export function AdjustablePillButton({text, darkmode, icon}: props) {
    const modeClass = darkmode ? styles.dark : styles.light;
     return (
        <button className={[styles.adjustablePillButtonBody, modeClass].join(" ")}>
            <img src = {icon} alt = '' className={styles.icon}></img>
            {text}
        </button>
    );
}