import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-6 relative z-20">
        <MovieList category={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList category={"Popular"} movies={movies.popularMovies} />
        <MovieList category={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList category={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
