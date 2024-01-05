import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Jabes Alves','Desenvolvedor Full-Stack', 'Motoboy'];
    const [loop, setLoop] = useState(0) ;
    const[isDeleting,setIsDeleting] = useState(false) ;
    const escreve = 300;
    const apagar = 100
    const [delta, setDelta] =  useState(100);
    
    
    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    
        },[text])
        
        const toType = ()=>{
            let i = loop % toRotate.length;
            let fullTexte = toRotate[i];
            let udatedText = isDeleting ? fullTexte.substring(0,text.length -1):fullTexte.substring(0,text.length +1) 

            setText(udatedText);
            if(!isDeleting && udatedText === fullTexte){
                    setIsDeleting(true)
                    setDelta(apagar);
            }else if(isDeleting && udatedText === '')
            {
                setIsDeleting(false)
                setDelta(escreve);
                setLoop(loop+1)
            }
        }

    return(
        <div id="Presentation" className={styles.Presentation}>
            <h4>Bem-vindo ao meu Portfólio</h4>
            <h1>Olá, eu sou {text}</h1>
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