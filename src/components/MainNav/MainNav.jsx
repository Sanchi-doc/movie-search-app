import data from '../../data/Navigation.json'
import {NavLink} from 'react-router-dom'
export const MainNav = () => {
    return <nav>
        <ul>{data.map(({id, href, text})=> 
        <li key={id} 
        ><NavLink to={href}>
            {text}
        </NavLink>
        </li>)}</ul>
    </nav>
}