import Cards from "./cards/Cards.js"
import Data from "./movies/Movies"
import Main from "./description/Main"


const Home = () => {
    return (
        <div className="container">
        <>
         <Main />
            <Data />
            <Cards />
        </>
           
         </div>
    )
}

export default Home