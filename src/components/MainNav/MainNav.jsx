import data from '../../data/Navigation.json'
import {NavLink} from 'react-router-dom'
import styles from './mainNav.module.css'
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";

const icons = {
    movie: <BsFillCameraReelsFill/>,
    heart: <FaHeart/>,
    home:<TbHomeFilled/>
}

export const MainNav = () => {
    return <ul className={styles.list}>{data.map(({id, href, text, icon})=> 
        <li key={id} 
        ><NavLink  className={styles.btn} to={href}>
            <p className={styles.text}>{text}</p>
            {icons[icon]}
        </NavLink>
    </li>)}</ul>
}