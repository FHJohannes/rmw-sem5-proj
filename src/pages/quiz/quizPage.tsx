import { QuizComponent } from "src/components/quizComponent/quizComponent";
import { QuizPageContent } from './useQuizContent.tsx'


export function QuizPage() {
    return (
        <main>  
            <QuizComponent content={QuizPageContent}/>
        </main>
    );
}