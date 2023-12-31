import { Outlet, NavLink } from "react-router-dom";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import "../layout/style.css"
import "../../App.css"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useState } from "react";

const activeStyleHome =({isActive})=>isActive?"active_logo":"logo"
const activeStylePage = ({isActive})=>isActive?"active_page":"link"

const Layout = () => {

    const [menu,setMenu] = useState(false)
    
    return (
<div className="container">
        <header className="header">
            
            <NavLink to="/"  onClick={()=>setMenu(!menu)} className={activeStyleHome} ><h1 className="logo">ShowHub</h1></NavLink>

            <nav className={menu?["layout","active"].join(" "):"layout"}>
                <NavLink to="/movies"  onClick={()=>setMenu(!menu)} className={activeStylePage}>Movies</NavLink>
                <NavLink to="/contact"  onClick={()=>setMenu(!menu)} className={activeStylePage} >Contact</NavLink>
                <NavLink to="/series"  onClick={()=>setMenu(!menu)} className={activeStylePage}>Series</NavLink>
                <NavLink to="/about"  onClick={()=>setMenu(!menu)} className={activeStylePage}>About Us</NavLink>
                <Search className="link"/>
                <NavLink to="/signIn"  onClick={()=>setMenu(!menu)} className={activeStylePage}>SignIn</NavLink>
                <NavLink to="/signUp"  onClick={()=>setMenu(!menu)} className={activeStylePage}>SignUp</NavLink>
            </nav>
            <div onClick={()=>setMenu(!menu)} className="menu">
                {menu?<AiOutlineClose className="menu_icon"/>:<AiOutlineMenu className="menu_icon"/>}
            </div>
           
        </header>
        <Outlet />
        <Footer/>

        </div>
    )
};

export default Layout;
