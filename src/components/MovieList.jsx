/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

const MovieList = ({ category, movies }) => {
  return (
    <div className="px-6">
      <h2 className="text-3xl py-4 text-white">{category}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map(({ id, poster_path }) => (
              <MovieCard key={id} poster_path={poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
