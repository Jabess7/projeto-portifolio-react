import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import Projects from '../section/Projects'
import {useState} from 'react'


function Cards({ img, title, tech, description, repo, site }) {
    const [info, setIfo] = useState(false)

    function infoOn(){
        
        return setIfo(true)
    }
    function infOff(){
        return setIfo(false)
    }

    return (
        <div className={styles.Cards} onMouseLeave={infOff} >
            
                <div>
                    <a href={site} target="_blank"><img src={img} onMouseEnter={infoOn}></img>
                    </a></div>
                
            
            {info === true  && (

                <section >
                    <h3>
                        {title}
                    </h3>
                    <p><strong>Tencologia</strong> {tech}
                    </p>
                    <p>
                        {description}
                    </p>
                    <ButtonB text=' Repositório' link={repo}  ></ButtonB>
                </section>)}
                
        </div>
    )
}

export default Cards