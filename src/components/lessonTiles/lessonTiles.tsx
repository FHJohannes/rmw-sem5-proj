import { AdjustablePillButton } from "../adjustablePillButton/adjustablePillButton";
import styles from "./lessonTiles.module.css";
import type { lessonCard2 } from "src/pages/lessonsList/lessonsText";
import book_icon from 'src/assets/icons/Book_open.png';
import camera_icon from 'src/assets/icons/Video.png';
import quiz_icon from 'src/assets/icons/quiz.png';
import { useNavigate } from "react-router-dom";



interface props {
    cards: lessonCard2[];
}

export function LessonTiles({cards}: props) {

    const navigate = useNavigate();
    return(
        <div className={styles.initialContainer}>
            <h1 className={styles.pageTitle}>Lessons Overview</h1>
            <em className={styles.pageP}>Start practing by selecting a lesson!</em>
            <div className={styles.lessonTilesContainer}>
                {cards.map((card) => {
                    return(
                        <div className={styles.lessonTileBody}>
                            <div className={styles.insTileBody}>
                                <div className = {styles.cardText}>
                                    <h2>{card.title}</h2>
                                    <p>{card.shortText}</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <AdjustablePillButton 
                                        text={card.startBtn} 
                                        darkmode={true} 
                                        icon={book_icon}
                                    />
                                    <AdjustablePillButton
                                        onClick = {() => navigate(`videos/${card.id}`)} 
                                        text={card.watchBtn} 
                                        darkmode={true} 
                                        icon={camera_icon}
                                    />
                                    <AdjustablePillButton
                                        text={card.testBtn}
                                        darkmode={true}
                                        icon={quiz_icon}
                                    />
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