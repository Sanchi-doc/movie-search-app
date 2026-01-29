import { Outlet } from 'react-router-dom'
import data from '../../data/NavDetails.json'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetMovieByIDQuery } from '../../redux/films/filmOperations'
export const Details = () => {
  const {id} = useParams()
  const{data: film} = useGetMovieByIDQuery(id)
  
    return <>
    <div>
      <h1>{film?.original_title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`} alt={film?.original_title} width={'300px'} />
      <h2>{film?.overview}</h2>
      <p> Release Date: {film?.release_date}
        <br/> Rate: {film?.vote_average.toFixed(1)}
      </p>
      <p>Genres:</p> 
       <ul>
        {film?.genres.map(({id, name})=>
        <li key={id}>
           <p>{name}</p>
        </li>
        )}
        
       </ul>
    </div>
    <nav>
        <ul>{data.map(({id, href, text})=>
        <li key={id}
        ><NavLink to={href}>
          {text}
        </NavLink>
        </li>)}</ul>
    </nav>
    <Outlet/>
    </>  
    
}