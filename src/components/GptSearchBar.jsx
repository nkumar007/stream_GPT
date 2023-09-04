import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { options } from "../utils/constants";
import { addGptSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchRef = useRef(null);

  const langKey = useSelector((store) => store.config.lang);
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
      ". only give me names of movies, comma seperated like the example result given ahead. Example Result: movie 1, movie 2, movie 3,movie 4,movie 5";
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
    // const filteredResults = promiseResults.filter((movie) => movie !== null);

    const filteredResults = promiseResults
      .map((movies, index) => {
        // Get the movie suggestion for this set of TMDB results
        const suggestedMovieName = movieSuggestions[index].trim().toLowerCase();

        // Find the exact match in the TMDB results
        return movies.find(
          (movieDetail) =>
            movieDetail.title.toLowerCase() === suggestedMovieName
        );
      })
      .filter((movie) => movie); // Filter out any undefined/null results
    dispatch(addGptSearchResults(filteredResults));
    searchRef.current.value = "";
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className=" p-4 m-4 col-span-9 outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
