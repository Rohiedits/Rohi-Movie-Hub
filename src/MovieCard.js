import React from "react";
import { useWatchlist } from "./watchlistContext";

const MovieCard = ({ movie }) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <button
        onClick={() =>
          isInWatchlist ? removeFromWatchlist(movie.id) : addToWatchlist(movie)
        }
      >
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default MovieCard;
