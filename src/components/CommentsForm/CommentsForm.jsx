import { useState } from "react"

export const CommentsForm = () => {
    const [comment, setComment] = useState()
    const [rating, setRating] = useState()
    const handleInputChange = (event) => {
        const {name, value} = event.target 
        switch(name) {
            case 'comment':
            setComment(value)
            return
            case 'rating':
            setRating(value)
            return 
            default: return   
        }
    }
    return <form>
        <textarea maxLength={500} name='comment' value={comment} onChange={handleInputChange}/>
        <input type="range" min={1} max={10} step={1} name="rating" value={rating} onChange={handleInputChange}/>
        <button type="submit">submit</button>
    </form>
}