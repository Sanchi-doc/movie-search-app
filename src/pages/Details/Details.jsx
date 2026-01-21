import { Outlet } from 'react-router-dom'
import data from '../../data/NavDetails.json'
import { NavLink } from 'react-router-dom'
export const Details = () => {
    return <nav>
        <ul>{data.map(({id, href, text})=>
        <li key={id}
        ><NavLink to={href}>
          {text}
        </NavLink>
        </li>)}</ul>
    </nav>
    
}