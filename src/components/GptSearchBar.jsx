import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { options } from "../utils/constants";
import { addGptMovieResult, clearGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchRef = useRef(null);

  const langKey = useSelector((store) => store.config.lang);
  const movies = useSelector((store) => store.gpt.movieNames);
  const dispatch = useDispatch();

  const fetchMovieDetails = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchRef.current.value +
      ". only give me names of movies for the exact query and similar movies, comma seperated like the example result given ahead. Example Result: movie 1, movie 2, movie 3,movie 4,movie 5 and so on.";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const movieSuggestions =
      gptResults.choices[0]?.message?.content?.split(",");

    const tmdbResults = movieSuggestions.map((movie) =>
      fetchMovieDetails(movie)
    );

    const promiseResults = await Promise.all(tmdbResults);
    console.log(promiseResults);

    dispatch(
      addGptMovieResult({
        movieNames: movieSuggestions,
        movieResults: promiseResults,
      })
    );

    searchRef.current.value = "";
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className=" p-4 m-4 col-span-8 outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <div className="col-span-4 flex items-center gap-3">
          <button
            className="py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={handleSearch}
          >
            {lang[langKey].search}
          </button>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-lg disabled:opacity-50"
            disabled={!movies || movies.length === 0}
            onClick={() => dispatch(clearGptMovieResult())}
          >
            Clear Results
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
