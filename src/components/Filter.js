import React, { useState } from 'react';



const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = event => {
    const titleFilter = event.target.value;
    setTitleFilter(titleFilter);
    onFilter({ title: titleFilter, rating: ratingFilter });
  };
  
  const handleRatingChange = event => {
    const ratingFilter = event.target.value;
    setRatingFilter(ratingFilter);
    onFilter({ title: titleFilter, rating: ratingFilter });
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
