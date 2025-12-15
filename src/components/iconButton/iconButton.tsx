import styles from './iconButton.module.css'

interface props{
    text: string;
    stylemode: string;
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    children: any;
    onClick?: () => void;
}

function getStyle(type: string):string{
    switch (type) {
        case "medium":
            return styles.medium
        case "light":
            return styles.light
        case "dark":
            return styles.dark
        case "white":
            return styles.white
        default:
            return "";
    }
}

export function IconButton({text, stylemode, children, className, type, onClick}: props) {
    
    return (
        <button className={[styles.iconButtonBody, getStyle(stylemode), className].join(" ")} type={type ?? undefined} onClick={onClick}>
            <span className={styles.icon}>{children}</span>
            <span className={styles.text}>{text}</span>
        </button>
    )
}