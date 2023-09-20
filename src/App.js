import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import SignIn from "./pages/sign in/SignIn";
import SignUp from "./pages/sign up/SignUp";
import About from "./pages/about us/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import "./App.css"
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import SingleFilmPage from "./pages/singleFilmPage/SingleFilmPage";
import { Provider, useDispatch } from 'react-redux';
import store from "./store";
import { getMovies } from "./utils/APIUtils";
import { addValue } from "./store/stateSlice";
import VideoPage from "./pages/videoPage/VideoPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchMovies = async () => {
          const result = await getMovies();
          dispatch(addValue(result.data.results));
      };

      fetchMovies();
  }, []);

  return (
    <div className="container">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movie/:id" element={<SingleFilmPage />}/>
              <Route path="movie/:id/:title" element={<VideoPage/>}/>
              <Route path="series" element={<Series />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
