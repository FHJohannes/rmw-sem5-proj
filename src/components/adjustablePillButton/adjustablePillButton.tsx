import styles from './adjustablePillButton.module.css'

interface props{
    text: string;
    darkmode: boolean;
    icon: React.ElementType;
}

export function AdjustablePillButton({text, darkmode, icon: Icon}: props) {
    const modeClass = darkmode ? styles.dark : styles.light;
     return (
        <button className={[styles.adjustablePillButtonBody, modeClass].join(" ")}>
            <Icon className={styles.icon}/>
            {text}
        </button>
    );
}