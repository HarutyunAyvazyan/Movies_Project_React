import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"
import Top from "./top/Top"
import Movis from "./movis/Movis"
import Series from "./series/Series"

const Data = () => {


    return (
        <div className="movies">
            <Top />
            <Movis />
            <Series />
        </div>

    )
}

export default Data