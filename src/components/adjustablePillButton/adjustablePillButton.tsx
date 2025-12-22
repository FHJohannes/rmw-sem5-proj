import styles from './adjustablePillButton.module.css'

interface props{
    text: string;
    mode: string;
    icon: string;
    onClick?: () => void;
}

export function AdjustablePillButton({text, mode, icon, onClick}: props) {
    let modeClass = ""; 

    switch(modeClass) {
        case "first":
            styles.first;
            break;

        case "second":
            styles.second;
            break;

        case "third":
            styles.third;
            break;
    }
     return (
        <button onClick={onClick} className={[styles.adjustablePillButtonBody, mode].join(" ")}>
            <img src = {icon} alt = '' className={styles.icon}></img>
            {text}
        </button>
    );
}