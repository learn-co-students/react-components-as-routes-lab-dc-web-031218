import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, x) => (
        <div key={x}>
          <h2>{director.name}</h2>
          <ul>{director.movies.map((movie, y) => <li key={y}>{movie}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Directors;
