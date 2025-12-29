import styles from './adjustablePillButton.module.css'

interface props{
    text: string;
    mode: string;
    icon: string;
    onClick?: () => void;
}

function getStyle(type: string):string {
    switch(type) {
        case "first":
            return styles.first;

        case "second":
            return styles.second;

        case "third":
            return styles.third;

        case "dark":
            return styles.dark;

        default:
            return "";
    }
}

export function AdjustablePillButton({text, mode, icon, onClick}: props) {
    return (
        <button onClick={onClick} className={[styles.adjustablePillButtonBody, getStyle(mode)].join(" ")}>
            <img src = {icon} alt = '' className={styles.icon}></img>
            {text}
        </button>
    );
}