import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/upcoming?page=2";

  const getUpcomingMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
