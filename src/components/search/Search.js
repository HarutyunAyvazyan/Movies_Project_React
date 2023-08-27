import "../../components/search/style.css"
import search from "../../assets/images/vector.png"

const Search =() => {
    return (<>
        <div className="search_div">
            <input placeholder="Search" className="search"/>
            <button className="search_btn"><img src={search} /></button>
        </div>
</>
    )
}

export default Search