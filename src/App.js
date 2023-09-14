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

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setFilms(data))
  }, []);

  // console.log(films.results.map(film=>film.title))
  console.log(films.results)

  return (
    <div className="container">
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home  films ={films}/>} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="movies" element={<Movies films={films}/>} />
              <Route path="movie/:id" element={<SingleFilmPage films={films}/>}/>
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
