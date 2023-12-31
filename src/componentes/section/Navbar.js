import styles from'./Navbar.module.css'
import {FaInstagram, FaLinkedin, FaGithub}from"react-icons/fa";
import Nav from'react-bootstrap/Nav'


function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidade</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href="#"><FaInstagram size={30}/></a></li>
                <li><a href="https://github.com/Jabess7" target="_blank">
                    <FaGithub size={30}/>
                </a></li>
                <li><a href="#">
                    <FaLinkedin size={30}/>
                </a></li>
            </ul>
           
        </div>
    )
}

export default Navbar