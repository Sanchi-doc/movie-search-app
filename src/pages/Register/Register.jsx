import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/auth/authOperation"
// import { useEffect } from "react"

export const Register = () => {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const handleNameChange = (event) =>{
    //    setName(event.target.value);
       
    // }
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }
    // const handlePassChange = (event) => {
    //     setPassword(event.target.value)
    // }
    const dispatch = useDispatch()
    const handleSubmit = (event) =>{
        event.preventDefault()
          dispatch(register({
            name,
            email,
            password
        }))
    } 
    const handleInputChange = (event) => {
        const {name, value} = event.target
        switch(name){
            case 'name': 
            setName(value)
            return
            case 'email':
            setEmail(value)
            return
            case 'password':
            setPassword(value)
            return
            default: return     
        }
        
    }
    return <>
    <form onSubmit={handleSubmit}>
    <input type='text' name = 'name' value = {name} onChange={handleInputChange}/>
    <input type='text' name = 'email' value = {email} onChange={handleInputChange}/>
    <input type='text' name = 'password' value = {password} onChange={handleInputChange}/>
    <button type='submit'>
        register
    </button>
    </form>
    </>
}