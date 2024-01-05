import styles from'./Projects.module.css';
import lpdnc from'../../imagens/projetos/lpdnc.svg'
import Cards from'../elements/Cards.js';
import portifolio from'../../imagens/projetos/portifolio.svg'

function Projects(){
    return(
        <div id="Projects" className={styles.porjects}>
            <h1>Projetos</h1> 
            <Cards 
            img={lpdnc}
            title='LP - DNC'
            tech='HTML CSS e JS'
            description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
            repo='https://github.com/Jabess7/LPDNC'
            site='https://jabess7.github.io/LPDNC/'
           
            ></Cards> 
            <Cards
            img={portifolio}
            title='Portifolio React '
            tech='REACT'
            description='Este é o meu primeiro projeto desenvolvido utilizando a biblioteca React, uma das mais populares e poderosas para construção de interfaces de usuário (UI). O objetivo principal deste projeto foi compreender e aplicar os conceitos fundamentais de estado (useState) e efeitos colaterais (useEffect) no desenvolvimento de componentes dinâmicos e interativos'
            repo='https://github.com/Jabess7/projeto-portifolio-react'
            site='https://portifolio-rho-inky.vercel.app/'
            />  
            
         
        </div>
    )
}
export default Projects