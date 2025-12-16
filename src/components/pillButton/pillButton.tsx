import styles from './pillButton.module.css'
import { IoIosArrowForward } from "react-icons/io";

interface props{
    text: string;
    stylemode: string;
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

export function PillButton({text, stylemode, onClick}: props) {
    return (
        <button className={[styles.pillButtonBody, getStyle(stylemode)].join(" ")} onClick={onClick}>
            {text}
            <IoIosArrowForward />
        </button>
    )
}