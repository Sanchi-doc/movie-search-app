import { useGetReviewByIDQuery } from "../../redux/films/filmOperations"
import { useParams } from 'react-router-dom'
import styles from './review.module.css'
export const Review = () => {
    const {id} = useParams()
    const {data} = useGetReviewByIDQuery(id)
    
    return <>
    <ul className={styles.list}>
        {data?.results.map(({id, author, content})=>
        <li className={styles.listItem} key={id}>
            <h2>
               {author}
               <br/>{content}
            </h2>
        </li>)}
    </ul>
    </>
}