import styles from './iconButton.module.css'

interface props{
    text: string;
    darkmode: boolean;
    children: any;
}

export function IconButton({text, darkmode, children}: props) {
    const modeClass = darkmode ? styles.dark : styles.light;
    return (
        <button className={[styles.iconButtonBody, modeClass].join(" ")}>
            <span className={styles.icon}>{children}</span>
            <span className={styles.text}>{text}</span>
        </button>
    )
}