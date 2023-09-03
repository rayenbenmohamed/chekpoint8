import React, { useState } from 'react';
import MovieList from './components/MovieList ';



const App = () => {
  const [movies, setMovies] = useState([]);
  

  const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
   
  };

 

  return (
    <div className="app">
      <h1>Ma Liste de Films</h1>
      <button onClick={() => handleAddMovie({ title: "", description: "", posterURL: "", rating: 0 })}>Ajouter un Film</button>

      <h2>Liste des Films</h2>
      
      <MovieList movies={movies} />
    </div>
  );
};

export default App;


