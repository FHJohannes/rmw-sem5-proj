import type { VideoPageContent } from "src/pages/videoPages/videoPageText";
import styles from "./videoContainer.module.css";
import { useNavigate, useParams } from "react-router-dom";

interface props {
    content: VideoPageContent[];
}

export function VideoContent({content}: props){
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    const lessonVideo = content.find((cLV) => cLV.id === Number(id));

    return (
        <>    
            <div className={styles.initialContainer}>
                <h1 className={styles.pageTitle}>{lessonVideo?.videoTitle}</h1>
                <em className={styles.pageP}>{lessonVideo?.videoShortDescription}</em>
                <button 
                    onClick = {() => 
                        Number(id) > 1?
                        navigate(`/lessons/videos/${Number(id) - 1}`)
                        : navigate('/lessons/videos/7')}>Previous
                </button>
                <button 
                    onClick = {() => 
                        Number(id) < 7?
                        navigate(`/lessons/videos/${Number(id) + 1}`)
                        : navigate('/lessons/videos/1')}>Next
                </button>
            </div>
        </>
    )
}

// Number(id) > 1? navigate(`/lessons/videos/${Number(id) - 1}: navigate('/lessons/videos/7')
// onClick = {() => navigate(`/lessons/videos/${Number(id) - 1}`)}