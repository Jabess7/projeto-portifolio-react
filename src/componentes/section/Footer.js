import {FaInstagram, FaLinkedin, FaGithub}from"react-icons/fa";
import styles from'./Footer.module.css'

function Footer(){
    return(
        <div className={styles.Footer}>
            <ul>
                <li><a href="#"><FaInstagram size={30}/></a></li>
                <li><a href="https://github.com/Jabess7" target="_blank">
                    <FaGithub size={30}/>
                </a></li>
                <li><a href="#">
                    <FaLinkedin size={30}/>
                </a></li>
            </ul>
            <p>
                jabess7@gmail.com  
            </p>
            <p>Jabes Alves </p>
        </div>
    )
}
export default Footer