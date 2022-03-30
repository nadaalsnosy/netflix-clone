import { useState, useEffect, useContext } from "react";
import MainBanner from "../components/Login/MainBanner";
import ListSlider from "../components/Login/ListSlider";

import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import { MoviesContext } from "../context/MoviesModule";
import { useParams } from "react-router-dom";

const Home = ({ type }) => {
  const genereTypes = ["action", "comedy", "romance", "horror", "drama"];
  const { auth } = useAuth();
  const { getMovies } = useContext(MoviesContext);

  const [content, setContent] = useState();
  const [recentlyAdded, setRecentlyAdded] = useState();
  const [mostPopular, setMostPopular] = useState();
  const [generesMovies, setGeneresMovies] = useState([]);

  const { genere } = useParams();

  const getRandomMovie = async () => {
    try {
      const res = await axios.get(
        `/movies/random?${type ? `type=${type}` : ""}`,
        {
          headers: { Authorization: `${auth.token}` },
        }
      );
      setContent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoviesLists = async () => {
    setRecentlyAdded(await getMovies(type, genere, false, true));
    setMostPopular(await getMovies(type, genere, true));

    const generesMoviesList = [];
    for (const genere of genereTypes) {
      const moviesList = await getMovies(type, genere);
      generesMoviesList.push({
        genere,
        moviesList,
      });
    }
    setGeneresMovies(generesMoviesList);
    console.log(generesMovies)
  };

  useEffect(() => {
    if (auth.token) {
      getRandomMovie();
      loadMoviesLists();
    }
  }, [auth.token, type, genere]);

  return (
    <div className="bg-black overflow-hidden">
      <MainBanner type={type} content={content} genereTypes={genereTypes} />
      <div className="py-5">
        <ListSlider listName="Recently Added" moviesList={recentlyAdded} />
        <ListSlider listName="Most Popular" moviesList={mostPopular} />

        {generesMovies.map((item) => (
          <ListSlider
            key={item.genere}
            listName={`Top ${item.genere}`}
            type={type}
            moviesList={item.moviesList}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
