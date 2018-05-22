import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(movie => {
            return(
              <div>
                <h2>Name: {movie.title}</h2>
                <p>Time: {movie.time}</p>
                Genres:
                <ul>
                  {movie.genres.map(genre => {
                    return(
                      <p>{genre}</p>
                    )
                  })}
                </ul>
              </div>

            )
          })
        }
    </div>
  );
};

export default Movies;
