import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import FormModel from "./FormModel";
import { MoviesContext } from "../../context/MoviesModule";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const AddNewMovie = () => {
  const { setMovies, getMovies } = useContext(MoviesContext);
  const { auth } = useAuth();

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(true);

  const addMovie = async (movie) => {
    try {
      const res = await axios.post(
        "/movies/",
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
      setMovies((currentMovies) => [...currentMovies, { ...movie }]);
      getMovies();
    } catch (error) {
      console.log(error);
    }
    setShowForm(false);
  };

  return (
    <div className="bg-dark pt-7">
      <div className=" p-3 px-5 container d-flex justify-content-between">
        <h3 className="text-white">Videos</h3>

        <Button
          variant="danger bg-white text-danger fw-bold px-5"
          onClick={handleShowForm}
        >
          Add Video
        </Button>
      </div>

      <FormModel
        onSubmit={addMovie}
        showForm={showForm}
        setShowForm={setShowForm}
      />
    </div>
  );
};

export default AddNewMovie;
