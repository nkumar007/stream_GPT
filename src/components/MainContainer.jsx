import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const { id, original_title, overview } = movies[5];

  return (
    <div>
      <VideoInfo movieTitle={original_title} movieOverview={overview} />
      <VideoContainer movieID={id} />
    </div>
  );
};

export default MainContainer;
