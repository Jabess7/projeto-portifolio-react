import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';

function Presentation(){
    return(
        <div id="Presentation" className={styles.Presentation}>
            <h4>Bem-vindo ao meu Portfólio</h4>
            <h1>Olá, eu sou Jabes Alves</h1>
            <p> 
                Tenho uma paixão profunda por   tecnologia e soluções inovadoras.<br/> Como futuro desenvolvedor Full-stack, estou profundamente<br/> 
                empenhado em aprimorar minhas habilidades e conhecimentos
            </p>
            <ButtonA link=
            "https://github.com/Jabess7" text='Conecte-se comigo!'/>

        
        </div>
    )
}
export default Presentation