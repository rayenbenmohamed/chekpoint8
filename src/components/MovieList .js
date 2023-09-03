import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { movies } from './data/Movie.js';
import Filter from './Filter';

const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      movie.rating === parseFloat(rating)
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Filter onFilter={handleFilter} />

      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
