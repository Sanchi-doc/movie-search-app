import { useGetCastByIDQuery } from '../../redux/films/filmOperations'
import { useParams } from 'react-router-dom'
export const Cast = () => {
   const {id} = useParams()
   const {data: film} = useGetCastByIDQuery(id)
   console.log(film,"++++++");
   
    return <>
    <ul>
        {film?.cast.map(({id, original_name, profile_path, known_for_department})=>
        <li key={id}>
          <img width = {'300px'} src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt={original_name}
           />
           <h2>
            <a href={`https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(
                  original_name
                )}`} target='_blank'>
                
            {original_name}
            </a>
            <br/> {known_for_department}
           </h2>
        </li>
        )}
    </ul>
    </>
}