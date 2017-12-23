import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Movie.scss";

const Movie = props => {
  const { item } = props;
  return (
    <Link className="movie-item" to={`/movies/${item.id}`}>
      <li className="movie-center ">
        <img src={`/public/images/${item.poster}`} alt={item.poster} />
        <p>{item.title}</p>
      </li>
    </Link>
  );
};

export default Movie;
