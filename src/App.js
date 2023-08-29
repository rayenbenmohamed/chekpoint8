import React, { useState } from 'react';
import MovieList from './components/MovieList ';
import Filter from './components/Filter';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase()) &&
      (rating === '' || movie.rating >= parseFloat(rating))
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Ma Liste de Films</h1>
      <button onClick={() => handleAddMovie({ title: "", description: "", posterURL: "", rating: 0 })}>Ajouter un Film</button>

      <h2>Liste des Films</h2>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;


