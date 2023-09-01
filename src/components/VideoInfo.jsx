/* eslint-disable react/prop-types */

import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
const VideoInfo = ({ movieTitle, movieOverview }) => {
  const [isClicked, setIsClicked] = useState(false);
  const trailerKey = useSelector((store) => store.movies?.trailerKey);
  const youtubeURL = `https://www.youtube.com/watch?v=${trailerKey}`;

  const handleClick = () => {
    window.open(youtubeURL, "_blank");
  };
  return (
    <div className="px-10 py-[25%] absolute bg-gradient-to-r from-black  text-white w-screen aspect-video">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>

      <p
        className={`text-base w-1/4 mt-3 leading-tight transition-all duration-500 ease-in-out transform overflow-hidden ${
          isClicked
            ? "translate-y-0 opacity-100 max-h-[100px]"
            : "-translate-y-4 opacity-0 max-h-0"
        }`}
      >
        {movieOverview}
      </p>

      <div className="flex  gap-3 mt-3 font-semibold ">
        <button
          className="bg-white px-5 py-2 text-black flex items-center gap-3 rounded-sm text-lg hover:bg-opacity-70"
          onClick={handleClick}
        >
          <FaPlay className="text-2xl" /> Play
        </button>

        <button
          className="bg-custom-gray flex items-center gap-3 px-5 py-2 rounded-sm text-lg hover:bg-zinc-800"
          onClick={() => setIsClicked(!isClicked)}
        >
          <AiOutlineInfoCircle className="text-3xl" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
