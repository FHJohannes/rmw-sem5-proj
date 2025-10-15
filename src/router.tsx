import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/home/LandingPage.tsx";
import { LessonsList } from "./pages/lessonsList/LessonsList.tsx";
import { Rules } from "./pages/rules/Rules.tsx";
import { App } from './App.tsx'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <LandingPage/>},
            {path: "/home", element: <LandingPage anchor="welcome"/>},
            {path: "/welcome", element: <LandingPage anchor="welcome"/>},
            {path: "/mahjong", element: <LandingPage anchor="about"/>},
            {path: "/shortrules", element: <LandingPage anchor="shortrules"/>},
            {path: "/overview", element: <LandingPage anchor="tiles"/>},
            {path: "/summary", element: <LandingPage anchor="summary"/>},
            {
                path: "/lessons",
                element: <LessonsList/>,
                // children: [ { path: "/", element: <LandingPage /> } ], will be used for individual lessons
            },
            {path: "/rules", element: <Rules/>},
        ],
    },
])