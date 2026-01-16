import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/home/LandingPage.tsx";
import { LessonsList } from "./pages/lessonsList/LessonsList.tsx";
import { Rules } from "./pages/rules/Rules.tsx";
import { Play } from "./pages/play/Play.tsx";
import { App } from './App.tsx';
import { VideoPage } from "./pages/videoPages/videoPage.tsx";
import { QuizPage } from "./pages/quiz/quizPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <LandingPage/>},
            {path: "home", element: <LandingPage anchor="welcome"/>},
            {path: "welcome", element: <LandingPage anchor="welcome"/>},
            {path: "mahjong", element: <LandingPage anchor="about"/>},
            {path: "shortrules", element: <LandingPage anchor="shortrules"/>},
            {path: "overview", element: <LandingPage anchor="tiles"/>},
            {path: "summary", element: <LandingPage anchor="summary"/>},
            {path: "lessons", element: <LessonsList/>},
            {path: "lessons/videos/:id", element: <VideoPage/>},
            {path: "lessons/quiz/:id", element: <QuizPage/>},
            {path: "play", element: <Play/>},
            {
                path: "rules",
                children: [
                    {path: "", element: <Rules/> },
                    {path: "lesson1", element: <Rules anchor="lesson1"/> },
                    {path: "lesson2", element: <Rules anchor="lesson2"/> },
                    {path: "lesson3", element: <Rules anchor="lesson3"/> },
                    {path: "lesson4", element: <Rules anchor="lesson4"/> },
                    {path: "lesson5", element: <Rules anchor="lesson5"/> },
                    {path: "lesson6", element: <Rules anchor="lesson6"/> },
                    {path: "lesson7", element: <Rules anchor="lesson7"/> },
                ],
            },
            
        ],
    },
])