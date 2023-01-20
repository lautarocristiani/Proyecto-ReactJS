import React from 'react'
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
    <div className="navbar bg-base-100">
        <div className="flex-1 text-3xl">
            <h3>La tienda de ElLautyCraft</h3>
        </div>
        <div className="flex-initial">
            <Link className="btn btn-ghost normal-case text-xl" to={"/"}>INICIO</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/category/teclados"}>TECLADOS</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={"/category/mouses"}>MOUSES</Link>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;