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
                id: 1,
                title: "Which of these is a Character tile?",
                type: 2,
                validation: [0],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Man9'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Pei'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Pin6'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "Which of these tiles is the East Wind?",
                type: 2,
                validation: [2],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Hatsu'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Shaa'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Ton'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "Choose all the terminal tiles!",
                type: 2,
                validation: [0,1],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Pin9'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Sou1'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Nan'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "Choose all the honor tiles!",
                type: 2,
                validation: [2],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Pei'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Pin5-Dora'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Chun'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "What suit does this tile belong to?",
                type: 3,
                validation: [1],
                image: useDisplayTiles(useTilesByName(['Sou5-Dora'])),
                answers: [
                    {id: 0, text: "Pins"},
                    {id: 1, text: "Bamboo"},
                    {id: 2, text: "Character"},
                ],
            },
            {
                id: 1,
                title: "How many copies of every tile are in the game?",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "3"},
                    {id: 1, text: "4"},
                    {id: 2, text: "5"},
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
                title: "Is this a complete hand? (disregarding yaku)",
                type: 3,
                validation: [1],
                image: useDisplayTiles(useTilesByName(['Pin3','Pin3','Pin3','Sou4','Sou5-Dora','Sou6','Sou7','Sou8','Sou9','Shaa','Shaa','Shaa','Hatsu','Hatsu'])),
                answers: [
                    {id: 0, text: "yes", },
                    {id: 1, text: "no", }
                ],
            },
            {   
                id: 0,
                title: "How many different tilegroups exist in Riichi Mahjong?",
                type: 1,
                validation: [0],
                answers: [
                    {id: 0, text: "3", },
                    {id: 1, text: "4", },
                    {id: 2, text: "5", },
                ],
            },
            {   
                id: 0,
                title: "How are most complete hands formed?",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "a hand is complete once it has a yaku", },
                    {id: 1, text: "with 4 tilegroups and a pair", },
                    {id: 2, text: "any combination of groups and pairs makes the hand complete", },
                ],
            },
            {
                id: 1,
                title: "Which of these is a valid sequence?",
                type: 2,
                validation: [2],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Man8','Man9','Man1'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Chun','Haku','Hatsu'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Sou1','Sou2','Sou3',])), text: "answer3"},
                ],
            },
            {   
                id: 0,
                title: "When is a Quadruplet valid?",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "it is always valid", },
                    {id: 1, text: "only after declaring kan", },
                    {id: 2, text: "only when it is inside a closed hand", },
                ],
            },
        ],
    },
    {
        id: 1,
        title: "Quiz - Lesson 3",
        questions: [
            {
                id: 0,
                title: "When can you call PON?",
                type: 1,
                validation: [0],
                answers: [
                    {id: 0, text: "When someone else discards a tile I have a pair of", },
                    {id: 1, text: "When I draw the 3rd copy of a tile", },
                    {id: 2, text: "Only when the player to my left discards a tile I need to complete a triplet", }
                ],
            },
            {   
                id: 0,
                title: "When can you call CHI",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "When someone discards a tile i need to complete a Sequence", },
                    {id: 1, text: "Only when the player to my left discards a tile I need to complete a Sequence", },
                    {id: 2, text: "When I draw the tile that completes a Sequence", }
                ],
            },
            {   
                id: 0,
                title: "Which tile does this hand need to win?",
                type: 3,
                validation: [0],
                image: useDisplayTiles(useTilesByName(['Sou1','Sou2','Sou3','Sou5','Sou6','Sou7','Pin3','Pin3','Pin3','Man1','Man2','Ton','Ton'])),
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Man3'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Ton'])), text: "answer1"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Sou4'])), text: "answer1"},
                    {id: 3, image: useDisplayTiles(useTilesByName(['Pin3'])), text: "answer1"},
                ],
            },
            {
                id: 1,
                title: "What must apply so that you can call Riichi",
                type: 1,
                validation: [0,1],
                answers: [
                    {id: 2, text: "Must be 1 Tile away from winning", },
                    {id: 2, text: "Must be a closed hand", },
                    {id: 2, text: "Must have a Yaku", },
                ],
            },
            {   
                id: 0,
                title: "When can you call RON?",
                type: 1,
                validation: [0],
                answers: [
                    {id: 0, text: "When someone else discards my winning tile", },
                    {id: 1, text: "When I draw the winning tile myself", },
                    {id: 2, text: "After I have called Riichi wherever the winning tile shows up", }
                ],
            },
            {   
                id: 0,
                title: "How many options of calling KAN exist?",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "2", },
                    {id: 1, text: "3", },
                    {id: 2, text: "4", }
                ],
            },
        ],
    },
    {
        id: 1,
        title: "Quiz - Lesson 4",
        questions: [
            {
                id: 1,
                title: "If the 3 of bamboo is the dora-indicator, which tile is the dora?",
                type: 2,
                validation: [0],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Sou4'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Sou3'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Sou2'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "If the 9 of pins is the dora-indicator, which tile is the dora?",
                type: 2,
                validation: [2],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Pin9'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Haku'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Pin1'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "If the East Wind is the dora-indicator, which tile is the dora?",
                type: 2,
                validation: [2],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Ton'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Shaa'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Nan'])), text: "answer3"},
                ],
            },
            {
                id: 1,
                title: "If the White Dragon is the dora-indicator, which tile is the dora?",
                type: 2,
                validation: [1],
                answers: [
                    {id: 0, image: useDisplayTiles(useTilesByName(['Chun'])), text: "answer1"},
                    {id: 1, image: useDisplayTiles(useTilesByName(['Hatsu'])), text: "answer2"},
                    {id: 2, image: useDisplayTiles(useTilesByName(['Haku'])), text: "answer3"},
                ],
            },
        ],
    },
    {
        id: 1,
        title: "Quiz - Lesson 5",
        questions: [
            {
                id: 1,
                title: "What is Tenpai",
                type: 1,
                validation: [0],
                answers: [
                    {id: 0, text: "Tenpai is hen a hand only needs 1 more tile to win"},
                    {id: 1, text: "Tenpai means a hand has a yaku"},
                    {id: 2, text: "Tenpai prevents you from calling Riichi"},
                ],
            },
            {
                id: 1,
                title: "What does Furiten do",
                type: 1,
                validation: [2],
                answers: [
                    {id: 0, text: "It is only an indicator that you could have won already"},
                    {id: 1, text: "It prevents you from calling RON & TSUMO"},
                    {id: 2, text: "It prevents you from calling RON"},
                ],
            },
            {
                id: 1,
                title: "What is always the Dealers-Seatwind?",
                type: 1,
                validation: [1],
                answers: [
                    {id: 0, text: "Northwind"},
                    {id: 1, text: "Eastwind"},
                    {id: 2, text: "Westwind"},
                ],
            },
        ],
    },
    {
        id: 1,
        title: "Quiz - Lesson 6",
        questions: [
            {
                id: 1,
                title: "Can a hand have more than one Yaku?",
                type: 1,
                validation: [0],
                answers: [
                    {id: 0, text: "Yes"},
                    {id: 1, text: "No"}
                ],
            },
            {   
                id: 0,
                title: "What Yaku does this hand have?",
                type: 3,
                validation: [0],
                image: useDisplayTiles(useTilesByName(['Pin3','Pin4','Pin5','Pin6','Pin6','Pin6','Man3','Man4','Man5-Dora','Man5','Man5','Sou2','Sou3','Sou4'])),
                answers: [
                    {id: 0, text: "All Simples"},
                    {id: 1, text: "Yakuhai"},
                    {id: 2, text: "Pure Straight"}
                ],
            },
            {   
                id: 0,
                title: "What Yaku does this hand have?",
                type: 3,
                validation: [1],
                image: useDisplayTiles(useTilesByName(['Pin8','Pin8','Pin8','Man1','Man2','Man3','Man3','Man4','Man5','Sou9','Sou9','Chun','Chun','Chun'])),
                answers: [
                    {id: 0, text: "All Simples"},
                    {id: 1, text: "Yakuhai"},
                    {id: 2, text: "Pure Straight"}
                ],
            },
        ],
    },
    {
        id: 1,
        title: "Example Structure of quiztype",
        questions: [
            {
                id: 0,
                title: "weshalb?",
                type: 3,
                validation: [1],
                image: useDisplayTiles(useTilesByName(['Man1','Sou2'])),
                answers: [
                    {id: 0, text: "answer1", },
                    {id: 1, text: "answer2", },
                    {id: 2, text: "answer3", },
                ],
            },
            {   
                id: 0,
                title: "Which of these tiles is a Character tile?",
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
]