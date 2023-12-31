import styles from './Skills.module.css'
import javascript from '../../imagens/skills/javascript.svg'
import html from '../../imagens/skills/html.svg'
import css from '../../imagens/skills/css.svg'
import react from '../../imagens/skills/react.svg'


function Skills(){
    return(
        <div id="Skills" className={styles.skill}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
            </div>
        </div>
    )
}
export default Skills