import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Top from "./top/Top"
import Movis from "./movis/Movis"
import Series from "./series/Series"
import { API_URL } from "../../../constants"
import { useSelector } from 'react-redux';

const Data = () => {


    return (
        <div className="=container">
            <div className="movies">
                {/* <Top />
                <Movis /> */}
                <Series />
            </div>
        </div>


    )
}

export default Data