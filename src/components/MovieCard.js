import React from 'react';
import Card from 'react-bootstrap/Card';
const MovieCard = ({ data }) => {
  console.log(data);
  return (
     <>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={data.posterURL} width={90}height={200} />

      <Card.Body>
      <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         description: {data.description}
        </Card.Text>
        <Card.Text>
         note: {data.rating}
        </Card.Text>
      </Card.Body>
    </Card>
</>   
  );
}

export default MovieCard;
