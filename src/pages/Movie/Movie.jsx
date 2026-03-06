import { useState } from "react"
import { useLazyGetByNameQuery } from "../../redux/films/filmOperations"
import { MovieList } from "../../components/MovieList/MovieList"
import { BiSearchAlt } from "react-icons/bi";
import styles from './movie.module.css'
export const Movie = () => {
    const[name, setName] = useState('')
    const[page, setPage] = useState(1)
    const [getMovieByName,{data}] = useLazyGetByNameQuery() 
    
    const handleInputChange = (event) => {
        const {value} = event.target
        setName(value)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovieByName({name, page})
    }

    return<> 
    <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.position}>
           <input  className={styles.input} type='text' value={name} onChange={handleInputChange}/>
           <button className={styles.btn} type="submit"><BiSearchAlt/></button>
        </div>
    </form>
    <MovieList data={data}/>
    </>

}