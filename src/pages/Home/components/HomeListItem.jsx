export const HomeListItem = (id,title, poster_path, release_date, vote_average ) => {
    return <li>
    <NavLink to={`/details/${id}`}>
    <img width={'300px'} src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
    <h2>{title}</h2>
    <p>Release Date: {release_date}  
        <br/>Rate:{vote_average.toFixed(1)}</p>
    </NavLink>
  </li>
}