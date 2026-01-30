export const CastListItem = ({profile_path, original_name, known_for_department}) => {
    return <li >
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
   
}