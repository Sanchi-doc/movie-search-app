import { MovieList } from "../../components/MovieList/MovieList"
import { useGetPopularMovieQuery } from "../../redux/films/filmOperations"
export const Home = () => {
    const {data} = useGetPopularMovieQuery(1)
    return <>
    <nav>
      <MovieList data={data}/>
    </nav>
    </>
    
}