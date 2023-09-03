import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Top from "./top/Top"
import Movis from "./movis/Movis"
import Series from "./series/Series"
import { API_URL } from "../../../constants"

const Data =( {films}) => {


console.log(films,"kkkkkkkkkkkk")
    return (
        <div className="=container">
   <div className="movies">
            {/* <Top /> */}
            {/* <Movis /> */}
            <Series films={films}/>
        </div>
        </div>
     

    )
}

export default Data