import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={director.name} className="director">
            <h3>Name: {director.name}</h3>
            <h5>Movies:</h5>
            <ul>
              {director.movies.map(movie => {
                return <li key={movie}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
