import { useState } from "react"
import { useLazyGetByNameQuery } from "../../redux/films/filmOperations"
import { MovieList } from "../../components/MovieList/MovieList"
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
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleInputChange}/>
        <button type="submit">search</button>
    </form>
    <MovieList data={data}/>
    </>

}