import './landingPage.module.css';
import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Welcome } from 'src/components/welcome/Welcome.tsx';
import { TextSection } from 'src/components/textSection/TextSection.tsx';
import { RulesTextSection } from 'src/components/rulesTextSection/RulesTextSection.tsx';
import { Tiles } from 'src/components/tiles/Tiles.tsx';
import { previewLessons } from './previewLessons.tsx'
 
interface Props {
    anchor?: string;
}

export function LandingPage({ anchor }:Props) {

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
                <RulesTextSection />
            </Element>
            <Element name="tiles">
                <Tiles content={previewLessons}/>
            </Element>
            <Element name="summary">
                <TextSection title='Zusammenfassung oder so' text={placeholder} align='center'/>
            </Element>
        </main>
    )
}