import styles from './textSection.module.css'

interface Props{
    title?: string;
    text: string;
    align: string;
}

export function TextSection({ title, text, align }: Props) {
    const alignClass = styles[align];
    return (
        <section className={[styles.textSection, alignClass].join(" ")}>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </section>
    )
}