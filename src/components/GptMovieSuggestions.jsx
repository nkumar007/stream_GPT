import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.gpt.movieNames);
  return (
    <div className="bg-black text-white bg-opacity-90 px-6 w-screen h-screen py-4">
      <div>
        <div className="flex ">
          <div className="flex flex-wrap gap-4">
            {movies &&
              movies.map(({ id, poster_path }) => (
                <MovieCard key={id} poster_path={poster_path} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
