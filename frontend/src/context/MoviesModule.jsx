import { Routes, Route } from "react-router-dom";
import Movies from "../pages/Movies";
import Movie from "../pages/Movie";
import { useMemo, createContext, useState } from "react";
import axios from "../api/axios";
import NavbarComp from "../components/Login/NavbarComp";
import useAuth from "../hooks/useAuth";

import RequireAdminAuth from "../components/Auth/RequireAdminAuth";
import Home from "../pages/Home";
import VideoPage from "../pages/VideoPage";
import Profile from "../pages/Profile";
import EditProfile from "../components/Login/EditProfile";
import SearchPage from "../pages/SearchPage";
import UserList from "../pages/UserList";
import GenerePage from "../pages/GenerePage";
import MainPage from "../pages/MainPage";

export const MoviesContext = createContext();

const MoviesModule = () => {
  const { auth } = useAuth();
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovies = async (type, genere, mostPopular, recentlyAdded) => {
    try {
      const res = await axios.get(
        `/movies?${type ? `type=${type}` : ""}&${
          genere ? `genere=${genere}` : ""
        }&${mostPopular ? `rate=${mostPopular}` : ""}&${
          recentlyAdded ? `year=${recentlyAdded}` : ""
        }`,
        {
          headers: { Authorization: `${auth.token}` },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = useMemo(
    () => ({
      getMovies,
      movies,
      setMovies,
      filterMovies,
      setFilterMovies,
    }),
    [getMovies, movies, setMovies, filterMovies, setFilterMovies]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/movies" element={<MainPage />}>
          <Route index element={<Home type="movie" />} />
          <Route path=":genere" element={<GenerePage type="movie" />} />
        </Route>

        <Route path="/series" element={<MainPage />}>
          <Route index element={<Home type="series" />} />
          <Route path=":genere" element={<GenerePage type="series" />} />
        </Route>

        <Route path="/mainVideo/:id" element={<VideoPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/myList" element={<UserList />} />

        <Route path="/showLists" element={<RequireAdminAuth />}>
          <Route index element={<Movies />} />
          <Route path=":id" element={<Movie />} />
        </Route>
      </Routes>
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
