import { useState } from "react"
import { useDispatch } from "react-redux"
import {login} from "../../redux/auth/authOperation"
import { TbEye } from "react-icons/tb";
import { TbEyeClosed } from "react-icons/tb";
import styles from './login.module.css'
export const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[isShowPass, setShowPass] = useState(false) 
     
    const handleShowPass = () => {
        setShowPass(!isShowPass)
    }
    
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
    <form className={styles.form} onSubmit={handleSubmit}>
    <input className={styles.input} type='text' name='email' value = {email} onChange={handleInputChange} placeholder="Email"/> 
    <div className={styles.passwordWrap}>
     <input  className={styles.input} type={isShowPass?'password':'text'} name='password' value = {password} onChange={handleInputChange} placeholder="Password"/>
     <button className={styles.btn} type="button" onClick={handleShowPass}>{isShowPass?<TbEye/>:<TbEyeClosed/>}</button>
    </div>
    <button type='submit'>
        login
    </button>
    </form>
    </>
}