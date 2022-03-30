import { useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import ManyCards from "../components/Login/ManyCards";
import { MoviesContext } from "../context/MoviesModule";

const GenerePage = (type) => {
  const { auth } = useAuth();
  const { getMovies } = useContext(MoviesContext);
  const [generesMovies, setGeneresMovies] = useState([]);
  const { genere } = useParams();

  const loadMoviesLists = async () => {
    setGeneresMovies(await getMovies(type, genere));
  };

  useEffect(() => {
    if (auth.token) {
      loadMoviesLists();
    }
  }, [auth.token, type, genere]);

  return (
    <div className="bg-black overflow-hidden">
      <div className="py-5">
        {generesMovies ? (
          <ManyCards movies={generesMovies} pageTitle={genere} />
        ) : (
          <div className="d-flex justify-content-center p-3">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerePage;
