import "../../components/search/style.css"
import search from "../../assets/images/vector.png"
import { useEffect, useState } from "react"
import { API_URL } from "../../constants"



const Search =() => {
    const [inputValue,setInputValue] = useState("")
    const [films,setFilms] = useState([])

    useEffect(() => {
        fetch(API_URL)
          .then(res => res.json())
          .then(data => setFilms(data))
      }, []);



    const handleChange =(e) => {
        setInputValue(e.target.value)
    }
    

    return (
    <>
    <div className="search_main_div">
    <div className="search_div">
            <input placeholder="Search" className="search" onChange={handleChange}/>
            <button className="search_btn"><img src={search} /></button>
        </div>
        <div className="search_title_div">
            
            
        </div>
    </div>
      
        
</>
    )
}

export default Search