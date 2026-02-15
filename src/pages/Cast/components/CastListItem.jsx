import styles from '../cast.module.css'
import noPhotoImg from '../../../images/image.png'
export const CastListItem = ({profile_path, original_name, known_for_department}) => {
    return <li className={styles.listItem}>
          <img width = {'300px'} height={'440px'} src={profile_path?`https://image.tmdb.org/t/p/original/${profile_path}`: noPhotoImg} alt={original_name}
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
   
}