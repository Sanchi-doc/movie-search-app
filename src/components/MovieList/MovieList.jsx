import { MovieListItem } from "../../components/ListItems/MovieListItem"
import styles from './movieList.module.css'
export const MovieList = ({data}) => {
    return <ul className={styles.movieList}>
      {data?.results.map(({id, title, poster_path, release_date, vote_average}) =>
      <MovieListItem  key={id} id={id} title={title} poster_path={poster_path} release_date={release_date} vote_average={vote_average}/>)}
    </ul>
}