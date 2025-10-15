import './textSection.module.css'

interface Props{
    title?: string;
    text: string;
}

export function TextSection({ title, text }: Props) {
    return (
        <section>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </section>
    )
}