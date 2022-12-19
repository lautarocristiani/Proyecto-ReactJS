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
            <Link to={"/"}><a className="btn btn-ghost normal-case text-xl">INICIO</a></Link>
            <Link to={"/category/teclados"}><a className="btn btn-ghost normal-case text-xl">TECLADOS</a></Link>
            <Link to={"/category/mouses"}><a className="btn btn-ghost normal-case text-xl">MOUSES</a></Link>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;