import { AdjustablePillButton } from "../adjustablePillButton/adjustablePillButton";
import styles from "./lessonTiles.module.css";
import type { lessonCard2 } from "src/pages/lessonsList/lessonsText";
import { IoIosBook } from "react-icons/io";
import { IoIosCamera } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";

interface props {
    cards: lessonCard2[];
}

export function LessonTiles({cards}: props) {
    return(
        <div className={styles.initialContainer}>
            <h1 className={styles.pageTitle}>Lessons Overview</h1>
            <p className={styles.pageP}>Start practing by selecting a lesson!</p>
            <div className={styles.lessonTilesContainer}>
                {cards.map((card) => {
                    return(
                        <div className={styles.lessonTileBody}>
                            <div className={styles.insTileBody}>
                                <div className = {styles.cardText}>
                                    <h3>{card.title}</h3>
                                    <p>{card.shortText}</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <AdjustablePillButton text={card.startBtn} darkmode={true} icon={IoIosBook}/>
                                    <AdjustablePillButton text={card.watchBtn} darkmode={true} icon={IoIosCamera}/>
                                    <AdjustablePillButton text={card.testBtn} darkmode={true} icon={IoIosChatbubbles}/>
                                </div>
                            </div>
                            <div className = {styles.picContainer}>
                                <img src = {card.img} alt = "Lesson Preview Image"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}