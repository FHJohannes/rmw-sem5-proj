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
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.shortText}</p>
                                </div>
                                <button className = {styles.startBtn}>{card.startBtn}</button>
                                <button className = {styles.watchBtn}>{card.watchBtn}</button>
                                <button className = {styles.testBtn}>{card.testBtn}</button>
                            </div>
                            <img src = {card.img} alt = "Lesson Preview Image"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}