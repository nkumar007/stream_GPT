import MovieList from "./MovieList";

export const SecondaryContainer = () => {
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-6 relative z-20">
        <MovieList category={"Now Playing"} />
        <MovieList category={"Trending"} />
        <MovieList category={"Popular In India"} />
        <MovieList category={"From Aclaimed FilmMakers"} />
      </div>
    </div>
  );
};
