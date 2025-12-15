import type { ReactNode } from 'react';
import styles from './textBox.module.css'

interface Props{
    title?: string;
    text: string;
    description?: any;
    row: boolean;
    stylemode: string;
    children?: ReactNode;
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
        default:
            return "";
    }
}

export function TextBox({ children, title, text, row, stylemode, description }: Props) {
    const layoutClass = row ? styles.row : styles.column;
    return (
        <div>
            <div className={[styles.container, layoutClass, getStyle(stylemode)].join(" ")}>
                <div>
                    <p><em>{ title }</em></p>
                    <p>{ text }</p>
                </div>
                {children && <div className={styles.image}>
                        {children}
                        <span>{description}</span>
                    </div>
                }
            </div>
        </div>
    )
}