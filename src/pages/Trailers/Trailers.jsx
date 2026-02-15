import { useGetReviewVideoByIDQuery } from "../../redux/films/filmOperations"
import { useParams } from "react-router-dom"
import { VideoPlayers } from './components/VideoPlayer'
export const Trailers = () => {
    const{id} = useParams()
    const{data} = useGetReviewVideoByIDQuery(id)
    console.log(data);
    
    return <VideoPlayers vidios={data?.results}/>
}