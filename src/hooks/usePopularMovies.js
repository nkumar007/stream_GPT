import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=3";

  const getPopularMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
