import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(director => {
          return(
            <div>
              <h2>Name: {director.name}</h2>
              Movies:
              <ul>
                {director.movies.map(movie => {
                  return(<p>{movie}</p>)
                })}
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}

export default Directors
