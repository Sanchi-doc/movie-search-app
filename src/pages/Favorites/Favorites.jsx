import { useGetFavoritesQuery } from "../../redux/films/favoriteOperations"
import { MovieList } from "../../components/MovieList/MovieList";
export const Favorites = () => {
    const { data } = useGetFavoritesQuery({page: 1, limit: 20})
    console.log(data);
    return <>
    <MovieList data={data}/>
    </>
}