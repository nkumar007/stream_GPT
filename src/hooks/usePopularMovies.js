import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=3";

  const getPopularMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
