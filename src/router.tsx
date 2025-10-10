import {createBrowserRouter} from "react-router-dom";
import {Home} from "./pages/home/Home.tsx";
import {LessonsList} from "./pages/lessonsList/LessonsList.tsx";
import {Rules} from "./pages/rules/Rules.tsx";
import { App } from './App.tsx'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/lessons",
                element: <LessonsList />,
                // children: [ { path: "/", element: <Home /> } ], will be used for individual lessons
            },
            { path: "/rules", element: <Rules /> },
        ],
    },
])