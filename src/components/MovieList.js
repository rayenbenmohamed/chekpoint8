import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { movies } from './data/Movie.js';
import Filter from './Filter';
import { Link } from 'react-router-dom';

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
          <Link to={`/Movie/${movie.id}`} key={movie.title}>
          <MovieCard  movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MovieList;
