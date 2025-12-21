import { useTilesByName, useDisplayTiles } from 'src/components/playArea/useMahjongTiles';


export interface quiz{
    id: number,
    title: string,
    questions: question[],
}

export interface question{
    id: number,
    title: string;
    type: number,
    image?: any,
    validation: number[]
    answers: answer[],
}

export interface answer{
    id: number,
    image?: any,
    text: string,
}

export const QuizPageContent: quiz[] = [
    {
        id: 0,
        title: "Quiz - Lesson 1",
        questions: [
            {
                id: 0,
                title: "warum?",
                type: 1,
                validation: [1, 2],
                answers: [
                    {id: 0, text: "answer1", },
                    {id: 1, text: "answer2", },
                    {id: 2, text: "answer3", },
                ],
            },
            {
                id: 1,
                title: "wieso?",
                type: 2,
                validation: [1],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Man1'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Man1'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Man1'])), text: "answer3"},
                ],
            }
        ],
    },
    {
        id: 1,
        title: "Quiz - Lesson 2",
        questions: [
            {
                id: 0,
                title: "weshalb?",
                type: 3,
                validation: [1],
                image: useDisplayTiles(useTilesByName(['Man1'])),
                answers: [
                    {id: 0, text: "answer1", },
                    {id: 1, text: "answer2", },
                    {id: 2, text: "answer3", },
                ],
            }
        ],
    },
]