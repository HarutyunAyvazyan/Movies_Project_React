import { useEffect, useState } from "react"
import Cards from "./cards/Cards.js"
import Data from "./movies/Movies"
import Main from "./description/Main"


const Home = ({films}) => {


    return (
        <div className="container">
         <Main />
            <Data films={films}/>
            <Cards films={films}/>
         </div>
    )
}

export default Home