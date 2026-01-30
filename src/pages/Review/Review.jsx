import { useGetReviewByIDQuery } from "../../redux/films/filmOperations"
import { useParams } from 'react-router-dom'
export const Review = () => {
    const {id} = useParams()
    const {data} = useGetReviewByIDQuery(id)
    console.log(data,':)');
    
    return <>
    <ul>
        {data?.results.map(({id, author, content})=>
        <li key={id}>
            <h2>
               {author}
               <br/>{content}
            </h2>
        </li>)}
    </ul>
    </>
}