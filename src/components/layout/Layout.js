import { Outlet, NavLink } from "react-router-dom";
import Footer from "../footer/Footer";
import "../layout/style.css"
import "../../App.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react";
import { scrollUp } from "../../utils/utils";

const activeStyleHome = ({ isActive }) => isActive ? "active_logo" : "logo"
const activeStylePage = ({ isActive }) => isActive ? "active_page" : "link"

const Layout = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div >
            <header className="header">
                <div className="header_container">

<nav className={menu ? ["layout", "active"].join(" ") : "layout"} >
<NavLink to="/" onClick={() => setMenu(!menu)} className={activeStyleHome} ><h1 className="logo">ShowHub</h1></NavLink>
    <div className="layout_pages">
        <NavLink to="/movies" onClick={() => setMenu(!menu) } className={activeStylePage}>Movies</NavLink>
        <NavLink to="/series" onClick={() => setMenu(!menu)} className={activeStylePage}>Series</NavLink>
        <NavLink to="/newItems" onClick={() => setMenu(!menu)} className={activeStylePage}>New Items</NavLink>
        <NavLink to="/contact" onClick={() => setMenu(!menu)} className={activeStylePage} >Contact</NavLink>
        <NavLink to="/about" onClick={() => setMenu(!menu)} className={activeStylePage}>About Us</NavLink>
    </div>
    <div className="registretion_links">
        <NavLink to="/signIn" onClick={() => setMenu(!menu)} className={activeStylePage}>SignIn</NavLink>
        <NavLink to="/signUp" onClick={() => setMenu(!menu)} className={activeStylePage}>SignUp</NavLink>
    </div>

</nav>
<div onClick={() => setMenu(!menu)} className="menu">
    {menu ? <AiOutlineClose className="menu_icon" /> : <AiOutlineMenu className="menu_icon" />}
</div>

                </div>

               
            </header>
            <Outlet />
            <Footer />

        </div>
    )
};

export default Layout;
