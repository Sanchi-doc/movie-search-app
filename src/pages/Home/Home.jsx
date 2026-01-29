import { NavLink } from "react-router-dom"
import { useGetPopularMovieQuery } from "../../redux/films/filmOperations"
export const Home = () => {
    const {data} = useGetPopularMovieQuery(1)
    console.log(data)
    return <>
    <nav>
    <ul>
      {data?.results.map(({id, title, poster_path, release_date, vote_average}) =>
      <li key={id}>
        <NavLink to={`/details/${id}`}>
        <img width={'300px'} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
        <h2>{title}</h2>
        <p>Release Date: {release_date}  
            <br/>Rate:{vote_average.toFixed(1)}</p>
        </NavLink>
      </li>)}
    </ul>
    </nav>
    </>
    
}