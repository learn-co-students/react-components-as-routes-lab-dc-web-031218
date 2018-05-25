import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log("Movies()", movies)
  let genreId = 0; 
  let movieId = 0;
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map( m => {
        	return (
        		<div key={movieId++}>
	        		<h4>Name: {m.title}</h4>
	        		<p>Time: {m.time}</p>
	        		Genres:
	        		<ul>
	        			{m.genres.map(g=> <li key={genreId++}>{g}</li>)}
	        		</ul>
        		</div>
        	)	
        })}
    </div>
  );
};

export default Movies;
