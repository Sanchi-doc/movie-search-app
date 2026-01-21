import { MainNav } from "../MainNav/MainNav"
import { AuthNav } from "../authNav/authNav"
import{ useAuth } from "../../hooks/useAuth"
import {logout} from "../../redux/auth/authOperation"
import { useDispatch } from "react-redux"

export const Header = () => {
   const dispatch = useDispatch()
   const handleLogout = async() => {
    await dispatch(logout())
}
    const {isLoggedIn} = useAuth()
    return <><MainNav/>
    {!isLoggedIn && <AuthNav/> }
   {isLoggedIn && <button onClick = {handleLogout} type="button">logout</button>}
    </>
}