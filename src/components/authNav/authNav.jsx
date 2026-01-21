import data from "../../data/authNav.json"
import { NavLink } from "react-router-dom"

export const AuthNav = () => {
    return <nav>
        <ul> {data.map(({id, href, text})=>
        <li key={id}>
            <NavLink to={href}>
              {text}
            </NavLink></li>)}
        
        </ul>
    </nav>
}