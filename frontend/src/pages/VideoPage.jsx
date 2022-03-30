import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { Spinner } from "react-bootstrap";

const VideoPage = () => {
  const { id } = useParams();
  const { auth } = useAuth();
  const [movie, setMovie] = useState();
  console.log(movie);
  const getMovie = async () => {
    try {
      const res = await axios.get(`/movies/${id}`, {
        headers: { Authorization: `${auth.token}` },
      });
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.token) {
      getMovie();
    }
  }, [auth.token]);

  return (
    <>
      {movie ? (
        <div className="videoContainer">
          <video
            className="videoWatch"
            controls
            name="media"
            src={movie.video}
          ></video>
        </div>
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default VideoPage;
