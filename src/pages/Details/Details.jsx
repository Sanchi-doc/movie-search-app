import { Outlet } from 'react-router-dom'
import data from '../../data/NavDetails.json'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetMovieByIDQuery } from '../../redux/films/filmOperations'
import styles from './details.module.css'
export const Details = () => {
  const {id} = useParams()
  const{data: film} = useGetMovieByIDQuery(id)
  
    return <>
    <div className={styles.main}>
      <img  className={styles.img} src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`} alt={film?.original_title} width={'400px'} />
      <div className={styles.text}>
        <h1>{film?.original_title}</h1>
        <h2>{film?.overview}</h2>
      <p> Release Date: {film?.release_date}
        <br/> Rate: {film?.vote_average.toFixed(1)}
      </p>
      <div className={styles.genres}>
        <p>Genres:</p> 
       <ul className={styles.genresList}>
        {film?.genres.map(({id, name})=>
        <li className={styles.genresListItem} key={id}>
           <p>{name}</p>
        </li>
        )}

      </ul>
      </div>
      </div>
    </div>
    <nav>
        <ul className={styles.list}>{data.map(({id, href, text})=>
        <li key={id}
        ><NavLink to={href}>
          {text}
        </NavLink>
        </li>)}</ul>
    </nav>
    <Outlet/>
    </>  
    
}