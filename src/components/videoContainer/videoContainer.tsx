import type { VideoPageContent } from "src/pages/videoPages/videoPageText";
import styles from "./videoContainer.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { AdjustablePillButton } from "../adjustablePillButton/adjustablePillButton";
import book_icon from 'src/assets/icons/Book_open.png';
import quiz_icon from 'src/assets/icons/quiz.png';

interface props {
    content: VideoPageContent[];
}

export function VideoContent({content}: props){
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    const lessonVideo = content.find((lv) => lv.id === Number(id));

    const currentId: number = Number(id);

    const goPrev = () => {
        const prevId = currentId > 1? currentId - 1: content[content.length - 1].id;
        navigate(`/lessons/videos/${prevId}`);                
    }

    const goForth = () => {
        const nextId = currentId < content.length? currentId + 1: content[0].id;
        navigate(`/lessons/videos/${nextId}`);    
    }

    return (
        <>    
            <div className={styles.initialContainer}>
                <h1 className={styles.pageTitle}>{lessonVideo?.videoTitle}</h1>
                <em className={styles.pageP}>{lessonVideo?.videoShortDescription}</em>
                <div className={styles.btnContainer}>
                    <button className={styles.prevBtn} id={styles.btn} onClick = {goPrev}>
                        <FaArrowLeft className={styles.btnArrow}/>
                        Previous
                    </button>
                    <button className={styles.nextBtn} id={styles.btn} onClick = {goForth}>
                        Next 
                        <FaArrowRight className={styles.btnArrow}/>
                    </button>
                </div>
                <iframe src = {lessonVideo?.videoLink} 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen 
                        className={styles.videoPlaceholder}/>
                <div className={styles.pageDescription}>
                    <h2>Video Description</h2>
                    <p>{lessonVideo?.videoDescription}</p>
                </div>
                <div className={styles.btnWrapper}>
                    <div className={styles.optionBtns}>
                        <div className={styles.testBtn}>
                            <AdjustablePillButton 
                                text={String(lessonVideo?.testYourKnowledgeBtn)} 
                                mode={"dark"} 
                                icon={quiz_icon}
                                //onClick={() => navigate(`/quiz/}`)}
                            />
                        </div>
                        <div className={styles.backToBtn}>
                            <AdjustablePillButton 
                                text={String(lessonVideo?.backToLessonsBtn)} 
                                mode={"dark"} 
                                icon={book_icon}
                                onClick={() => navigate(`/lessons/`)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Number(id) > 1? navigate(`/lessons/videos/${Number(id) - 1}: navigate('/lessons/videos/7')
// onClick = {() => navigate(`/lessons/videos/${Number(id) - 1}`)}