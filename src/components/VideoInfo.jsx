/* eslint-disable react/prop-types */
const VideoInfo = ({ movieTitle, movieOverview }) => {
  return (
    <div>
      <h1>{movieTitle}</h1>
      <p>{movieOverview}</p>
    </div>
  );
};

export default VideoInfo;
