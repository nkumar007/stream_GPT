import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";

const GptSearchBar = () => {
  const searchRef = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleSearch = async () => {
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: movie 1, movie 2, movie 3,movie 4,movie 5";
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices);
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
