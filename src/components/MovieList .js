import React from 'react'
import MovieCard from './MovieCard'
import {movies} from './data/Movie'

const MovieList = () => {
  console.log(movies)
  return (
    <>
    <div className="movie-list">
      {movies.map((movie) => { return(
        <MovieCard key={movie.title} movie={movie} />
        )})}
    </div>
    </>
  );
};

export default MovieList;
