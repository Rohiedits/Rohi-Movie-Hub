import Hero from "./Hero";
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          
          <Link to={detailUrl}   className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}
// const MovieCard = ({ movie:
//   { title, vote_average, poster_path, release_date, original_language }
// }) => {
//   return (
//     <div className="movie-card">
//       <img
//         src={poster_path ?
//           `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
//         alt={title}
//       />

//       <div className="mt-4">
//         <h3>{title}</h3>

//         <div className="content">
//           <div className="rating">
//             <img src="star.svg" alt="Star Icon" />
//             <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
//           </div>

//           <span>•</span>
//           <p className="lang">{original_language}</p>

//           <span>•</span>
//           <p className="year">
//             {release_date ? release_date.split('-')[0] : 'N/A'}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


const SearchView = ({ keyword, searchResults }) => {
  const title =` 🔎You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;