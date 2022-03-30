import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import NeedLogin from "./components/Auth/NeedLogin";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LoggedOutHome from "./pages/LoggedOutHome";
import Footer from "./components/Footer";
import MoviesModule from "./context/MoviesModule";
import RequireAuth from "./components/Auth/RequireAuth";

import "./App.scss";

const App = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner animation="border" variant="danger" />
        </div>
      }
    >
      <div className="App bg-dark">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route>
                <Route element={<NeedLogin />}>
                  <Route path="/signUp" element={<SignUp />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/" element={<LoggedOutHome />} />
                </Route>

                <Route element={<RequireAuth />}>
                  <Route path="/*" element={<MoviesModule />} />
                </Route>
              </Route>
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
