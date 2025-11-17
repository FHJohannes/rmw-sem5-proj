import styles from "./lessonTiles.module.css";
import type { lessonCard2 } from "src/pages/lessonsList/lessonsText";

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
                            <div>
                                <div className = {styles.cardText}>
                                    <h3>{card.title}</h3>
                                    <p>{card.shortText}</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <button className = {styles.btn}>{card.startBtn}</button>
                                    <button className = {styles.btn}>{card.watchBtn}</button>
                                    <button className = {styles.btn}>{card.testBtn}</button>
                                </div>
                            </div>
                            <img src = {card.img} alt = "Lesson Preview Image"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}