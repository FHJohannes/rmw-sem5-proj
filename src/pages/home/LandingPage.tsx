import './landingPage.module.css';
import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Welcome } from 'src/components/welcome/Welcome.tsx';
import { TextSection } from 'src/components/textSection/TextSection.tsx';
import { RulesTextSection } from 'src/components/rulesTextSection/RulesTextSection.tsx';
import { Tiles } from 'src/components/tiles/Tiles.tsx';

interface Props {
    anchor?: string;
}

export function LandingPage({ anchor }:Props) {

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
                <TextSection title='Mahjong' text='This is Mahjong'/>
            </Element>
            <Element name="ShortRules">
                <RulesTextSection />
            </Element>
            <Element name="tiles">
                <Tiles />
            </Element>
            <Element name="summary">
                <TextSection title='Zusammenfassung oder so' text='This is Zusammenfassung oder so'/>
            </Element>
        </main>
    )
}