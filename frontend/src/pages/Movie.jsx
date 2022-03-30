import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  MovieDetails from "../components/Admin/MovieDetails";
import { MoviesContext } from "../context/MoviesModule";

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  
  useEffect(() => {
    if (movies?.length) {
      setMovie(movies.find((m) => m._id === id));
    }
  }, [id, movies]);

  return <MovieDetails movie={movie} setMovie={setMovie} />;
};

export default MoviePage;
