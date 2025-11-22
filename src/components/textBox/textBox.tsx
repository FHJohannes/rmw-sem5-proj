import type { ReactNode } from 'react';
import styles from './textBox.module.css'

interface Props{
    title?: string;
    text: string;
    description?: any;
    row: boolean;
    darkMode: boolean;
    children?: ReactNode;
}

export function TextBox({ children, title, text, row, darkMode, description }: Props) {
    const layoutClass = row ? styles.row : styles.column;
    const modeClass = darkMode ? styles.dark : styles.light;
    return (
        <div>
            <div className={[styles.container, layoutClass, modeClass].join(" ")}>
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