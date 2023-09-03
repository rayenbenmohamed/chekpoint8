import React, { useState } from 'react';



const Filter = ({ onFilter }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = event => {
    const titlefiltrech= event.target.value

    setTitleFilter(titlefiltrech);
    onFilter({ title:titlefiltrech, rating: ratingFilter });
  };

  const handleRatingChange = event => {
    const ratingfiltrech= event.target.value
    setRatingFilter(ratingfiltrech);
    onFilter({ title: titleFilter, rating: ratingfiltrech });
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
