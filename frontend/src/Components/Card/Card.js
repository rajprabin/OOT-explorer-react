// Card.js

import React from 'react';
import "./Card.css";
import defaultAvatar from '../../Asset/movie.jpeg'; 

const Card = ({ datas }) => {

  console.log(datas)

  const cards = () => datas.map(
    (data) => {
      return (
        <li key={data.title} className="card">
          <img 
		  src={data.imageurl[0] || defaultAvatar} 
		  alt={data.title}  
		  className="card-image" />
		  <div className="content">
        <h2>{data.title}</h2>
        <p><strong>Genres:</strong> {data.genre.join(', ')}</p>
        <p><strong>IMDb Rating:</strong> {data.imdbrating}</p>
        <p><strong>Released:</strong> {data.released}</p>
        <p><strong>Type:</strong> {data.type}</p>
        <p><strong>Synopsis:</strong> {data.synopsis}</p>
      </div>
        </li>
      );
    }
  );

  return <ul className="card-grid">{datas ? cards() : null}</ul>;
}

export default Card;
