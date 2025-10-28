import styles from './pillButton.module.css'
import { IoIosArrowForward } from "react-icons/io";

interface props{
    text: string;
}

export function PillButton({text}: props) {
    return (
        <button className={styles.pillButtonBody}>
            {text}
            <IoIosArrowForward />
        </button>
    )
}