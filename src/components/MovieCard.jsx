/* eslint-disable react/prop-types */
const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4 ">
      <img
        src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
        alt="movie_poster"
      />
    </div>
  );
};

export default MovieCard;
