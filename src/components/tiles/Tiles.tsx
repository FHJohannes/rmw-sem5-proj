import styles from './tiles.module.css'
import type { lessonCard } from 'src/pages/home/previewLessons'
import { GoArrowUpRight } from "react-icons/go";

interface props {
    content: lessonCard[]
}

export function Tiles({ content }: props) {
    return (
        <section>
            <h2>Lessons Overview</h2>
            <div className={styles.tilesContainer}>
                {content.map((item)=>{
                    return(
                        <div className={styles.tileBody}>
                            <div>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.shortText}</p>
                                </div>
                                <a href="">
                                    <GoArrowUpRight/>
                                    <span>Learn More</span>
                                </a>
                            </div>
                            <img src={item.img} alt="a placeholder image" />
                        </div>
                    )
                })}
            </div> 
        </section>
    )
}