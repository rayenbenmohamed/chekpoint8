import React, { useState } from 'react';


const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = event => {
    setTitleFilter(event.target.value);
    onFilter({ title: event.target.value, rating: ratingFilter });
  };

  const handleRatingChange = event => {
    setRatingFilter(event.target.value);
    onFilter({ title: titleFilter, rating: event.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        min="0"
        max="10"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
