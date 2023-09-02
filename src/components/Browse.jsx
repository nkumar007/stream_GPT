import { Header } from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const searchVisible = useSelector((store) => store.gpt.isSearchVisible);

  console.log(searchVisible);
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      {searchVisible ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
