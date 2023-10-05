import { useEffect, useState } from "react"
import Cards from "./cards/Cards.js"
import Data from "./movies/Movies"
import Main from "./main/Main"
import { getMovies } from "../../utils/APIUtils.js"
import { useDispatch } from 'react-redux';
import { addValue } from "../../store/stateSlice.js"
import PopularFilms from "./popularMovies/PopularFilms.js"
import TopFilms from "./topFilms/TopFilms.js"
import UpcomingPremieres from "./upcomingPremieres/UpcomingPremieres.js"

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await getMovies();
            // console.log(result.data.results)
            return dispatch(addValue(result.data.results));
        };

        fetchMovies()
    }, [])

    return (
        <div className="container">
         <Main />
            {/* <Data/>
            <Cards /> */}
            <PopularFilms/>
            <UpcomingPremieres/>
            <TopFilms/>
         </div>
    )
}

export default Home