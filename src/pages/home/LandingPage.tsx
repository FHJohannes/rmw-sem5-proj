import './landingPage.module.css';
import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Welcome } from 'src/components/welcome/Welcome.tsx';
import { TextSection } from 'src/components/textSection/TextSection.tsx';
import { RulesTextSection } from 'src/components/rulesTextSection/RulesTextSection.tsx';
import { Tiles } from 'src/components/tiles/Tiles.tsx';
import { previewLessons } from './previewLessons.tsx'
import { useNavigate } from "react-router-dom";
 
interface Props {
    anchor?: string;
}

export function LandingPage({ anchor }:Props) {

    const navigate = useNavigate();

    const placeholder = "Lorem ipsum brizzle for sure amet, shiz adipiscing fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Nullizzle you son of a bizzle velizzle, dawg volutpizzle, suscipizzle bow wow wow, get down get down vizzle, arcu. Pellentesque eget tortizzle. Sed erizzle. Gizzle izzle dolor dapibizzle ma nizzle tempizzle tempizzle. Mauris break it down nibh izzle shizzlin dizzle. Nizzle izzle tortor. Its fo rizzle sizzle boofron ghetto. In ass mofo fo shizzle dictumst. Funky fresh dapibizzle. Phat tellus urna, gizzle boofron, mattizzle shizznit, gangsta vitae, nunc. Fo shizzle suscipizzle. Integizzle sempizzle the bizzle sizzle purus."

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
                <TextSection title='Mahjong' text={placeholder} align='center'/>
            </Element>
            <Element name="ShortRules">
                <RulesTextSection 
                title='Rules'
                subtitle='Rules a written guide'
                text='This guide will take you from 0 to basic riichi mahjong knowledge. It will try to explain the rules of riichi mahjong in a comprehensive and understandable way. Every chapter is supported by a little quiz and a video tutorial aswell.'
                buttonText='Start Reading'
                buttonStyle='white'
                imgPath='src/assets/images/i_am_speed.png'
                stylemode='dark'
                onClick={() => {navigate(`/rules`)}}
                />
            </Element>
            <Element name="ShortRules">
                <RulesTextSection 
                title='Quiz'
                subtitle='Rules a written guide'
                text='This guide will take you from 0 to basic riichi mahjong knowledge. It will try to explain the rules of riichi mahjong in a comprehensive and understandable way. Every chapter is supported by a little quiz and a video tutorial aswell.'
                buttonText='Test your Knowledge'
                buttonStyle='dark'
                reverse={true}
                imgPath='src/assets/images/i_am_speed.png'
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