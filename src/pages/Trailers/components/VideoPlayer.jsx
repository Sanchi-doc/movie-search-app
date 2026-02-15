import Iframe from 'react-iframe'
import styles from '../trailers.module.css'
export const VideoPlayers = ({vidios}) => {

    return <ul className={styles.list}>
     {vidios?.map(({id,key,name})=>
      <li key={id} loading = 'lazy'>
       <Iframe 
        url={`https://www.youtube.com/embed/${key}?rel=0&showinfo=0&autoplay=1`}        
        width="640px"
        height="320px"
        display="block"
        title={name}
        overflow='cover'/>
      </li>
     )}
    </ul>
}