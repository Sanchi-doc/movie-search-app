import data from "../../data/authNav.json"
import { NavLink } from "react-router-dom"
import styles from './authNav.module.css'
import { AiOutlineLogin, AiOutlineUserAdd} from "react-icons/ai";

const icons = {
    login: <AiOutlineLogin/>,
    register: <AiOutlineUserAdd/>
}
export const AuthNav = () => {
    return <ul className={styles.list}> {data.map(({id, href, text, icon})=>
        <li key={id}>
            <NavLink className={styles.btn} to={href}>
            {icons[icon]}
            <p className={styles.text}>{text}</p>
        </NavLink></li>)}
        
    </ul>
}