import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=2";

  const getTopRatedMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
