/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { options } from "../utils/constants";

const VideoContainer = ({ movieID }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return <div>VideoContainer</div>;
};

export default VideoContainer;
