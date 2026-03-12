import { useEffect, useState } from "react"
import { useLazyGetByNameQuery } from "../../redux/films/filmOperations"
import { MovieList } from "../../components/MovieList/MovieList"
import { BiSearchAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io"
import { toast } from 'react-toastify'
import styles from './movie.module.css'
export const Movie = () => {
    const[name, setName] = useState('')
    const[page, setPage] = useState(1)
    const [getMovieByName,{data}] = useLazyGetByNameQuery() 
    
    useEffect(()=> {
       if (data) {
        toast.info(` count of movies: ${data?.total_results}`)
       }
    }, [data])
    
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
            <button type='button' className={styles.close}><IoMdClose/></button>
           <input  className={styles.input} type='text' value={name} onChange={handleInputChange}/>
           <button className={styles.btn} type="submit"><BiSearchAlt/></button>
        </div>
    </form>
    <MovieList data={data}/>
    </>

}