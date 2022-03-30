import { useContext } from "react";
import { Spinner } from "react-bootstrap";

import ManyCards from "../components/Login/ManyCards";
import { MoviesContext } from "../context/MoviesModule";

const SearchPage = () => {
  const title = "Your Reasult";
  const { filterMovies } = useContext(MoviesContext);

  return (
    <>
      {filterMovies ? (
        <ManyCards movies={filterMovies} pageTitle={title} />
      ) : (
        <div className="d-flex justify-content-center p-3">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </>
  );
};

export default SearchPage;
