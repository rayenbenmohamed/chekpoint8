import React from 'react';
import Card from 'react-bootstrap/Card';
import { movies } from './data/Movie.js';

const MovieCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={movie.posterURL} width={90} height={200} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            
<Card.Text>
              Note: {movie.rating}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default MovieCard;