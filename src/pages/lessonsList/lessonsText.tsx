import lesson1img from 'src/assets/images/lesson1.png';
import lesson2img from 'src/assets/images/lesson2.png';
import lesson3img from 'src/assets/images/lesson3.png';
import lesson4img from 'src/assets/images/lesson4.png';
import lesson5img from 'src/assets/images/lesson5.png';
import lesson6img from 'src/assets/images/lesson6.png';
import lesson7img from 'src/assets/images/lesson7.png';

export interface lessonCard2{
    id: number;
    title: string;
    shortText: string;
    img: string;
    startBtn: string;
    watchBtn: string;
    testBtn: string;
}

export const previewLessons2: lessonCard2[] = [
    {
        id: 1,
        title: "LESSON 1",
        shortText: "In this lesson you will learn about the different tiles, their suits and names.",
        img: lesson1img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"

    },
    {
        id: 2,
        title: "LESSON 2",
        shortText: "Here you will learn more about your playing Hand and how to form it into a winning hand.",
        img: lesson2img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
    {
        id: 3,
        title: "LESSON 3",
        shortText: "Learn all the different audible calls you can make during a game and what they do.",
        img: lesson3img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
    {
        id: 4,
        title: "LESSON 4",
        shortText: "Here you will learn about the gameplay element called 'Dora'. As well as its closely connected friend, the Dead Wall.",
        img: lesson4img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
    {
        id: 5,
        title: "LESSON 5",
        shortText: "Get to know some important terminology and the significance behind Riichi Mahjongs Winds.",
        img: lesson5img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
    {
        id: 6,
        title: "LESSON 6",
        shortText: "Learn your first basic yakus.",
        img: lesson6img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
    {   id: 7,
        title: "LESSON 7",
        shortText: "Recap everything you have learned on this Webpage.",
        img: lesson7img,
        startBtn: "Start Learning",
        watchBtn: "Watch Video",
        testBtn: "Test Your Knowledge"
    },
]