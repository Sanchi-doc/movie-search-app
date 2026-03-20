import { useGetCommentsQuery} from '../../redux/comments/commentsOperation'
import { useParams } from 'react-router-dom'
import { CommentsListItem } from '../../components/CommentsListItem/CommentsListItem'
import { CommentsForm } from '../../components/CommentsForm/CommentsForm'
export const Comments = () => {
    const {id} = useParams()
    const { data } = useGetCommentsQuery(id)
    
    return<> 
    <CommentsForm/>
    <button type='button'> add comment</button>
    <ul>
    {data?.results.map(({_id, author, email, comments, rating })=>
    <CommentsListItem key={_id} author={author} email={email} comments={comments} rating={rating}/>)}
    </ul></>
}