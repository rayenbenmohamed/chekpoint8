import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Descrip from './components/Descrip';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
  };

  return (
    
      <div className="app">
        <h1>Ma Liste de Films</h1>
        <button onClick={() => handleAddMovie({ title: "", description: "", posterURL: "", rating: 0 })}>
          Ajouter un Film
        </button>

        <h2>Liste des Films</h2>

        <Routes>
          <Route path="/movie/:id" Component={Descrip}/>
          <Route path="/" element={<MovieList movies={movies} />} />
        </Routes>
      </div>
    
  );
};

export default App;