import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, x) => (
        <div key={x}>
          <h2>{movie.title}</h2>
          <h4>{movie.time}</h4>
          <ul>{movie.genres.map((genre, y) => <li key={y}>{genre}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
