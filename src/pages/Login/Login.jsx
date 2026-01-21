import { useState } from "react"
import { useDispatch } from "react-redux"
import {login} from "../../redux/auth/authOperation"
export const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
     
     
    
    
    const handleInputChange = (event) => {
        const{name, value} = event.target
        switch(name){
            case 'email':
            setEmail(value)
            return
            case 'password':
            setPassword(value)
            return
            default: return

        }
    }
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
       event.preventDefault()
       dispatch(login({
        email,
        password
       }))
    }
    
    return <>
    <form onSubmit={handleSubmit}>
    <input type='text' name='email' value = {email} onChange={handleInputChange}/>
    <input type='text' name='password' value = {password} onChange={handleInputChange}/>
    <button type='submit'>
        login
    </button>
    </form>
    </>
}