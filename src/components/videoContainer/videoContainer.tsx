import type { VideoPageContent } from "src/pages/videoPages/videoPageText";
import styles from "./videoContainer.module.css";
import { useParams } from "react-router-dom";

interface props {
    content: VideoPageContent[];
}

export function VideoContent({content}: props){

    const {id} = useParams<{id: string}>();

    const lessonVideo = content.find((cLV) => cLV.id === Number(id));

    return(
        <>    
            <div className={styles.initialContainer}>
                <h1 className={styles.pageTitle}>{lessonVideo?.videoTitle}</h1>
                <em className={styles.pageP}>{lessonVideo?.videoShortDescription}</em>
            </div>
        </>
    )
}