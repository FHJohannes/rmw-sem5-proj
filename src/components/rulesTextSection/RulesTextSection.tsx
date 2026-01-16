import  styles from './rulesTextSection.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'

interface Props{
    title: string;
    subtitle: string;
    text: string;
    buttonText: string;
    buttonStyle: string;
    stylemode: string;
    imgPath: string;
    reverse?: boolean;
    onClick?: () => void;
} 

function getStyle(type: string):string{
    switch (type) {
        case "medium":
            return styles.medium
        case "light":
            return styles.light
        case "xlight":
            return styles.xlight
        case "dark":
            return styles.dark
        case "white":
            return styles.white
        case "gradiant":
            return styles.gradiant
        default:
            return "";
    }
}

export function RulesTextSection({title, subtitle, text, buttonText, buttonStyle, reverse, imgPath, stylemode, onClick}: Props) {
    const layoutClass:string = !reverse ? styles.row : styles.reverse
    return (
        <section className={[styles.RulesTextSection, layoutClass, getStyle(stylemode)].join(" ")}>
            <div>
                <span>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                </span>
                <p>{text}</p>
                <PillButton text={buttonText} stylemode={buttonStyle} onClick={onClick}/>
            </div>
            <img src={imgPath} alt="a placeholder image" />
            
        </section>
    )
}