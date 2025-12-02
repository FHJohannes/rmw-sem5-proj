import styles from './adjustablePillButton.module.css'

interface props{
    text: string;
    darkmode: boolean;
    icon: string;
    onClick?: () => void;
}

export function AdjustablePillButton({text, darkmode, icon, onClick}: props) {
    const modeClass = darkmode ? styles.dark : styles.light;
     return (
        <button onClick={onClick} className={[styles.adjustablePillButtonBody, modeClass].join(" ")}>
            <img src = {icon} alt = '' className={styles.icon}></img>
            {text}
        </button>
    );
}