import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Welcome } from 'src/components/welcome/Welcome.tsx';
import { TextSection } from 'src/components/textSection/TextSection.tsx';
import { RulesTextSection } from 'src/components/rulesTextSection/RulesTextSection.tsx';
import { useNavigate } from "react-router-dom";
 
interface Props {
    anchor?: string;
}

export function LandingPage({ anchor }:Props) {

    const navigate = useNavigate();


    useEffect(() => {
        if (anchor) {
            scroller.scrollTo(anchor, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [anchor]);

    return (
        <main>
            <Element name="welcome">
                <Welcome />
            </Element>
            <Element name="about">
                <TextSection title='Mahjong' text="Riichi Mahjong is one of many variations of the chinese game mahjong. Unlike solitair mahjong (which you probably thought of when your friend asked you to play some mahjong), this game is played with 4 players and is somewhat similar to poker. There is alot of details, rules and exceptions so dont worry if you dont understand everything immediately." align='center'/>
            </Element>
            <Element name="ShortRules">
                <RulesTextSection 
                title='Rules'
                subtitle='Rules a written guide'
                text='This guide will take you from 0 to basic riichi mahjong knowledge. It will try to explain the rules of riichi mahjong in a comprehensive and understandable way. Every chapter is supported by a little quiz and a video tutorial aswell.'
                buttonText='Start Reading'
                buttonStyle='white'
                imgPath='src/assets/images/Lessons.png'
                stylemode='gradiant'
                onClick={() => {navigate(`/rules`)}}
                />
            </Element>
            <Element name="ShortRules">
                <RulesTextSection 
                title='Quiz'
                subtitle='Quizzes to improve your knowledge.'
                text='In this section you can deepen your understanding of the different chapters. Each chapter provides a couple of questions which should help you understand the rules of the game more easily.'
                buttonText='Test your Knowledge'
                buttonStyle='dark'
                reverse={true}
                imgPath='src/assets/images/Quiz.png'
                stylemode='white'
                onClick={() => {navigate(`/lessons`)}}
                />
            </Element>
            <Element name="summary">
                <TextSection 
                title='CONCLUSION' 
                text="We hope this project can help make learning the riichi mahjong rules a bit easier and more accessible for more people. As a fan of the game myself i would love to spread this game even further and have more people experience the higs and lows of a good round of riichi mahjong." 
                align='center'/>
            </Element>
        </main>
    )
}