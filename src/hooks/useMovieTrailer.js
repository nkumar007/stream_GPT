import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerKey } from "../utils/movieSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    console.log(json.results);
    const trailerData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = trailerData.length ? trailerData[0] : json.results[0];

    console.log(trailer);
    dispatch(addTrailerKey(trailer?.key));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
