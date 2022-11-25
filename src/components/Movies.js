import React from "react";
import { movies } from "../data";

function Movies() {
  const showMovies = movies.map((movie)=>{
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time}min</p>
        <ul>
          {movie.genres.map((genre)=>{
           return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })
  return (
  <div>
    <h1>Movies Page</h1>
    {showMovies}
  </div>
  );
}

export default Movies;
