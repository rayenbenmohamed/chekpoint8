// Importez les dépendances nécessaires
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { movies } from './data/Movie.js';

const Descrip = (props) => {
  // Supprimez cette ligne, car vous importez déjà movies
  // const [movies, setMovies] = useState([]);

  let { movieid } = useParams();
  
  // Utilisez parseInt pour convertir movieid en nombre entier
  movieid = parseInt(movieid);
  // Utilisez parseInt pour convertir movieid en nombre entier
  movieid = parseInt(movieid);
const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((movie) => movie.id === 1);
    setMovie(selectedMovie);
    
  }, [movieid]);
const {test}=useParams();
  console.log('match',  movies.find((movie) => movie.id == test));
  
  if (!movie) {
    return <div>Le film n'a pas été trouvé.</div>;
  }

  return (
    <div>
      <h2>Description du film</h2>
      <p>{movie.description}</p>
      <p>{movie.urlfilm}</p>
    </div>
  );
};

export default Descrip;