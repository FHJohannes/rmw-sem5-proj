import type { VideoPageContent } from "src/pages/videoPages/videoPageText";
import styles from "./videoContainer.module.css";
import { useNavigate, useParams } from "react-router-dom";

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
                <button onClick = {goPrev}>Previous</button>
                <button onClick = {goForth}>Next</button>
            </div>
        </>
    )
}

// Number(id) > 1? navigate(`/lessons/videos/${Number(id) - 1}: navigate('/lessons/videos/7')
// onClick = {() => navigate(`/lessons/videos/${Number(id) - 1}`)}