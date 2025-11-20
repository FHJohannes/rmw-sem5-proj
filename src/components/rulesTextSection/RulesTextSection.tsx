import  styles from './rulesTextSection.module.css'
import  { PillButton } from '../pillButton/pillButton.tsx'
import placeholderIMG from 'src/assets/tileImages/i_am_speed.png';


export function RulesTextSection() {
    return (
        <section className={styles.RulesTextSection}>
            <div>
                <span>
                    <h2>Rules</h2>
                    <h3>Subheading</h3>
                </span>
                <p>Lorem ipsum brizzle for sure amet, shiz adipiscing fo shizzle mah nizzle fo rizzle, mah home g-dizzle. Nullizzle you son of a bizzle velizzle, dawg volutpizzle, suscipizzle bow wow wow, get down get down vizzle, arcu. Pellentesque eget tortizzle. Sed erizzle. Gizzle izzle dolor dapibizzle ma nizzle tempizzle tempizzle. Mauris break it down nibh izzle shizzlin dizzle. Nizzle izzle tortor. Its fo rizzle sizzle boofron ghetto. In ass mofo fo shizzle dictumst. Funky fresh dapibizzle. Phat tellus urna, gizzle boofron, mattizzle shizznit, gangsta vitae, nunc. Fo shizzle suscipizzle. Integizzle sempizzle the bizzle sizzle purus.</p>
                <PillButton text="Refresh your memory now" darkmode={false}/>
            </div>
            <img src={placeholderIMG} alt="a placeholder image" />
            
        </section>
    )
}