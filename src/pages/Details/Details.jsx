import { Outlet } from 'react-router-dom'
import data from '../../data/NavDetails.json'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGetMovieByIDQuery } from '../../redux/films/filmOperations'
import { useAddFavoritesMutation } from '../../redux/films/favoriteOperations'
import { useGetFavoritesQuery } from '../../redux/films/favoriteOperations'
import { useDeleteFavoritesMutation} from '../../redux/films/favoriteOperations'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styles from './details.module.css'
export const Details = () => {
  const {id} = useParams()
  const{data: film} = useGetMovieByIDQuery(id)
  const {data: getFilm} = useGetFavoritesQuery({page: 1, limit: 20})
  const [delFilm] = useDeleteFavoritesMutation()
  const [addFilm, {data: favData}] = useAddFavoritesMutation()
  const [favorite, setFavorite] = useState(false)

  useEffect (() => {
    const favFilm = getFilm?.results.find( item => item.id == Number(id))
    if (favFilm){
      setFavorite(true)
    }else {
      setFavorite(false)
    }
  }, [getFilm, id])
   
  const handleOnClick = () => {
    
    const favFilm = getFilm?.results.find( item => item.id == Number(id))
    

    if (favFilm){
      delFilm(favFilm?._id)
      setFavorite(false)
      toast.error(`${favFilm?.title} removed from favorite`)
    }

    if(!favFilm) {
      addFilm({id: film?.id, title: film?.title, poster_path: film?.poster_path, release_date: film?.release_date, vote_average: film?.vote_average})
      setFavorite(true)
      toast.success(`${film?.title} add to favorite`)
    }
  }

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
      <button type='button' onClick={handleOnClick}> {!favorite ? 'add to favorite': "remove to favorite" }</button>
      </div>
    </div>
    <nav>
        <ul className={styles.list}>{data?.map(({id, href, text})=>
        <li key={id}
        ><NavLink to={href}>
          {text}
        </NavLink>
        </li>)}</ul>
    </nav>
    <Outlet/>
    </>  
    
}