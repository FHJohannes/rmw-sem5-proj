import styles from './textSection.module.css'

interface Props{
    title?: string;
    text: string;
}

export function TextSection({ title, text }: Props) {
    return (
        <section className={styles.textSection}>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </section>
    )
}