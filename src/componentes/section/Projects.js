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
            description='Projeto pessoal de criação de portifólio apresentação de hahahahahahahahaha'
            repo='https://portifolio-rho-inky.vercel.app/'
            site='https://github.com/Jabess7/projeto-portifolio-react'
            />  
            
         
        </div>
    )
}
export default Projects