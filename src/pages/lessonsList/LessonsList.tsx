import styles from './lessonsList.module.css'
import { LessonTiles } from 'src/components/lessonTiles/lessonTiles'
import { previewLessons2 } from './lessonsText'

export function LessonsList() {

    return (
        <main>
            <LessonTiles cards={previewLessons2}/>
        </main>
    )
}