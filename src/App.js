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
import { useEffect, useState } from "react";
import {  pageName } from "./constants";
import { useDispatch } from 'react-redux';
import { getMovies } from "./utils/APIUtils";
import { addValue } from "./store/stateSlice";
import VideoPage from "./pages/videoPage/VideoPage";
import MoviePage from "./pages/singleFilmPage/MoviePage";
import NewItems from "./pages/newItems/NewItems";

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
              <Route path={pageName.about} element={<About />} />
              <Route path={pageName.contact} element={<Contact />} />
              <Route path={pageName.movies} element={<Movies />} />
              <Route path={pageName.moviePage} element={<MoviePage />}/>
              <Route path={pageName.moviePageVideo} element={<VideoPage/>}/>
              <Route path={pageName.series} element={<Series />} />
              <Route path={pageName.signIn} element={<SignIn />} />
              <Route path={pageName.signUp} element={<SignUp />} />
              <Route path={pageName.newItems} element={<NewItems />} />

            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
