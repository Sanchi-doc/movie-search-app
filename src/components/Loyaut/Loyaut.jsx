import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import styles from './loyaut.module.css'
export const Loyaut = () => {
    return <><Header/>
    <main className={styles.main}><Outlet/></main>
    <Footer/></>
}