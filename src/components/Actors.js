import React from "react";
import { actors } from "../data";

function Actors() {

const showActors = actors.map((actor)=>{
  return (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie)=>{
          return <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
  )
})


  return (
  <div>
    <h1>Actors Page</h1>
    {showActors}
  </div>);
}

export default Actors;
