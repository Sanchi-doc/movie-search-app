import { useAuth } from "../../hooks/useAuth"
export const CommentsListItem = ({author, comments, rating, email}) => {
    const {user} = useAuth()
    console.log(user.email);
    console.log('email', email);
    
    return <li >
        <p >
          author: {author}  
        </p>
        <p>
            comments: {comments}
        </p>
        <p>
            rating: {rating}
        </p>
        {email === user.email && <button type='button'>delete</button>}
        {email === user.email && <button type="button">edit</button>}
    </li>
}