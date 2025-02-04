// import React from "react";
// import { useWatchlist } from "./watchlistContext";

// const MovieCard = ({ movie }) => {
//   const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

//   const isInWatchlist = watchlist.some((item) => item.id === movie.id);

//   return (
//     <div className="movie-card">
//       <h3>{movie.title}</h3>
//       <button
//         onClick={() =>
//           isInWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
//         }
//       >
//         {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
//       </button>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react'

const MovieCard = ({ movie:
  { title, vote_average, poster_path, release_date, original_language }
}) => {
  return (
    <div className="movie-card">
      <img
        src={poster_path ?
          `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
        alt={title}
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span>•</span>
          <p className="lang">{original_language}</p>

          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
