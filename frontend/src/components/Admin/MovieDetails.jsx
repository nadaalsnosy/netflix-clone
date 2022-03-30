import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import FormModel from "./FormModel";
import ConfirmForm from "./ConfirmForm";
import { useNavigate } from "react-router-dom";

import { MoviesContext } from "../../context/MoviesModule";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const movieDetails = {
  _id: "UnKNOWN",
  title: "UnKNOWN TITLE",
  desc: "This description is not defined as you did not finish all data",
  img: "https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/photos%2FspiderMan.jpg?alt=media&token=e9e83c9f-7bbd-4dea-80b5-524849c1de81",
  trailer:
    "https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/spiderMan.mp4?alt=media&token=ad4ed7e7-a46f-44ef-b56f-7e1e4718cb68",
  video:
    "https://firebasestorage.googleapis.com/v0/b/netflix-9e61f.appspot.com/o/spiderMan.mp4?alt=media&token=ad4ed7e7-a46f-44ef-b56f-7e1e4718cb68",
  year: "2000",
  rate: 50,
  limit: "All",
  genere: "All",
  isSeries: false,
};

const MovieDetails = (props) => {
  const { setMovies } = useContext(MoviesContext);
  const { movie, setMovie } = props;
  const navigate = useNavigate();
  const { auth } = useAuth();
  console.log(movie);

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);

  const [showConfirm, setShowConfirm] = useState(false);
  const handleShowConfirm = () => setShowConfirm(true);

  const updateMovie = async (movie) => {
    const id = movie._id;
    try {
      const res = await axios.patch(
        `/movies/${id}`,
        JSON.stringify({
          title: movie.title,
          desc: movie.desc,
          img: movie.img,
          trailer: movie.trailer,
          video: movie.video,
          year: movie.year,
          rate: movie.rate,
          limit: movie.limit,
          genere: movie.genere,
          isSeries: movie.isSeries,
        }),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `${auth.token}`,
          },
        }
      );
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }

    setMovies((currentMovies) => {
      const movieIndex = currentMovies.findIndex((u) => u._id === movie._id);
      currentMovies.splice(movieIndex, 1, movie);
      return [...currentMovies];
    });

    setShowForm(false);
  };

  const deleteMovie = async (movie) => {
    const id = movie._id;
    try {
      const res = await axios.delete(`/movies/${id}`, {
        headers: {
          "content-type": "application/json",
          Authorization: `${auth.token}`,
        },
      });
      setMovies((currentMovies) => {
        const newMovies = currentMovies.filter((media) => media._id !== id);
        return [...newMovies];
      });
      navigate("/showLists");
    } catch (error) {
      console.log(error);
    }
    setShowConfirm(false);
  };

  return (
    <>
      <Card className="text-center movieDetailsContent bg-dark text-white">
        <Card.Header className="text-danger fs-5 mt-5">Movie Details</Card.Header>
        <Card.Body className="container">
          <Card.Title className="mb-3 fw-bold fs-3">
            {movie.title || movieDetails.title}
          </Card.Title>
          <Card.Text> {movie.desc || movieDetails.desc}</Card.Text>

          <div className="d-xl-flex flex-wrap my-4 mx-auto">
            <Card.Text className="m-auto my-2">
              <span className="fw-bold"> Added in:</span>{" "}
              {movie.year || movieDetails.year}
            </Card.Text>
            <Card.Text className="m-auto my-2">
              <span className="fw-bold"> Rate:</span>{" "}
              {movie.rate || movieDetails.rate}
            </Card.Text>
            <Card.Text className="m-auto my-2">
              <span className="fw-bold"> For:</span>{" "}
              {movie.limit || movieDetails.limit}
            </Card.Text>
            <Card.Text className="m-auto my-2">
              <span className="fw-bold"> Genere:</span>{" "}
              {movie.genere || movieDetails.genere}
            </Card.Text>
            <Card.Text className="m-auto my-2">
              <span className="fw-bold"> Type:</span>
              {`${movie.isSeries ? "Movie" : "Series"}`}
            </Card.Text>
          </div>

          <div className="d-xl-flex justify-content-between">
            <Card.Text>
              <img
                className="w-100 mw-500"
                src={movie.img || movieDetails.img}
                alt=""
              />
            </Card.Text>
            <Card.Text>
              <video
                className="w-100 mw-500"
                controls
                muted
                src={movie.trailer || movieDetails.trailer}
              ></video>
            </Card.Text>
          </div>

          <div className="d-flex justify-content-between mt-5 px-5">
            <Link to={`/showLists`}>
              <Button variant="secondary">Go Back</Button>
            </Link>
            <div>
              <Button variant="warning mx-4" onClick={handleShowForm}>
                Edit
              </Button>
              <Button variant="danger" onClick={handleShowConfirm}>
                Delete
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
      <FormModel
        onSubmit={updateMovie}
        movie={movie}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <ConfirmForm
        onSubmit={deleteMovie}
        movie={movie}
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
      />
    </>
  );
};

export default MovieDetails;
