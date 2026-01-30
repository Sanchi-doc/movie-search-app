import { HomeListItem } from "./components/HomeListItem"
import { useGetPopularMovieQuery } from "../../redux/films/filmOperations"
export const Home = () => {
    const {data} = useGetPopularMovieQuery(1)
    console.log(data)
    return <>
    <nav>
    <ul>
      {data?.results.map(({id, title, poster_path, release_date, vote_average}) =>
      <HomeListItem id={id} title={title} poster_path={poster_path} release_date={release_date} vote_average={vote_average}/>)}
    </ul>
    </nav>
    </>
    
}