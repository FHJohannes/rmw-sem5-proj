import placeholderIMG from 'src/assets/images/i_am_speed.png';

export interface lessonCard{
    title: string;
    shortText: string;
    img: string;
}

export const previewLessons: lessonCard[] = [
    {
        title: "Lessons",
        shortText: "Short Explanation Text, lorem ipsum dolor sit amet, sadipscing elitr",
        img: placeholderIMG
    },
    {
        title: "Read Area",
        shortText: "Short Explanation Text, lorem ipsum dolor sit amet, sadipscing elitr",
        img: "src/assets/tileImages/i_am_speed.PNG"
    },
    {
        title: "Play Area",
        shortText: "Short Explanation Text, lorem ipsum dolor sit amet, sadipscing elitr",
        img: "src/assets/tileImages/i_am_speed.PNG"
    },
    {
        title: "Drag&Drop Area",
        shortText: "Short Explanation Text, lorem ipsum dolor sit amet, sadipscing elitr",
        img: "src/assets/tileImages/i_am_speed.PNG"
    }
]