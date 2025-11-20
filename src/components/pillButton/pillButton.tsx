import styles from './pillButton.module.css'
import { IoIosArrowForward } from "react-icons/io";

interface props{
    text: string;
    darkmode: boolean;
}

export function PillButton({text, darkmode}: props) {
    const modeClass = darkmode ? styles.dark : styles.light;
    return (
        <button className={[styles.pillButtonBody, modeClass].join(" ")}>
            {text}
            <IoIosArrowForward />
        </button>
    )
}