import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log("Directors", directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( d=>{
      	return(
      		<div key={d.name}>
      			<h4>Name: {d.name}</h4>
      			Movies:
      			<ul>
      				{d.movies.map(m=> <li key={m}>{m}</li>)}
      			</ul>
      		</div>
      	)  
	  })}
    </div>
  );
}

export default Directors
