import { NavLink } from "react-router-dom"
import styles from './movieListItem.module.css'
export const MovieListItem = ({id,title, poster_path, release_date, vote_average} ) => {
    return <li className={styles.listItem}>
    <NavLink to={`/details/${id}`}>
    <img width={'300px'} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
    <div className={styles.text}>
    <h2>{title}</h2>
    <p>Release Date: {release_date}  
        <br/>Rate:{vote_average.toFixed(1)}</p>
    </div>
    </NavLink>
  </li>
}