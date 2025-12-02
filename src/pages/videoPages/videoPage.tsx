import { VideoContent } from "src/components/videoContainer/videoContainer";
import { videoPageContent} from "./videoPageText";
export function VideoPage(){
    return (
            <main>
                <VideoContent content={videoPageContent} ></VideoContent>
            </main>
        )
}