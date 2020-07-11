import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({ id, title, year, poster, summary, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <h3 className="movie_title">{title}</h3>
      <h5 className="movie_year">{year}</h5>
      <ul className="movie_genres">
        {genres.map((genre, index) => {
          return (
            <li className="movie_genre" key={index}>
              {genre}
            </li>
          );
        })}
      </ul>
      <p className="movie_summary">{summary.slice(0, 180)}...</p>
    </div>
  );
}
//! img 태그에 alt와 title 둘 다 제목으로 동일하게 주었는데
//! 설계상 안티케이스가 될 수 있으니 주의할 것

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
