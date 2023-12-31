import styles from'./Cards.module.css'
import ButtonB from './ButtonB'
import Projects from '../section/Projects'


function Cards({img, title,tech, description, repo, site}){
    return(
        <div className={styles.Cards}>
           <div>
            <a href={site} target="_blank"><img src={img}></img></a>
           </div>
        <section>
            <h3>
                {title}           
            </h3>
            <p><strong>Tencologia</strong> {tech}

            </p>
            <p>
                {description}
            </p>
            <ButtonB text=' Repositório' link={repo}  ></ButtonB>
        </section>
        </div>
    )
}

export default  Cards