import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log("Actors", actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( a =>{
      	return(
      		<div key={a.name}>
		      	<h4>Name: {a.name}</h4>
		      	Movies:
		      	<ul>
		      		{a.movies.map(m=> <li key={m}>{m}</li>)}
		      	</ul>
      		</div>
      	)
      })}
    </div>
  );
};

export default Actors;
