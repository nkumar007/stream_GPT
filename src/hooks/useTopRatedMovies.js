import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { options } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=2";

  const getTopRatedMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
