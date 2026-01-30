import { useGetCastByIDQuery } from '../../redux/films/filmOperations'
import { useParams } from 'react-router-dom'
import { CastListItem } from './components/CastListItem'
export const Cast = () => {
   const {id} = useParams()
   const {data: film} = useGetCastByIDQuery(id)
   console.log(film,"++++++");
   
    return <>
    <ul>
        {film?.cast.map(({id, original_name, profile_path, known_for_department})=>
        <CastListItem  key={id} original_name={original_name} profile_path={profile_path} known_for_department={known_for_department}/>
        )}
    </ul>
    </>
}