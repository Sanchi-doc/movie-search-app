import { useGetFavoritesQuery } from "../../redux/films/favoriteOperations"
import { MovieList } from "../../components/MovieList/MovieList";
import { toast } from 'react-toastify'
import { useEffect } from "react";
export const Favorites = () => {
    const { data } = useGetFavoritesQuery({page: 1, limit: 20})

    useEffect(()=> {
        if(data) {
          toast.info(` count of favorite movies: ${data?.results.length}`)
        }
    }, [data])
    
    return <>
    <MovieList data={data}/>
    </>
}