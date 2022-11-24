import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <div className="navbar bg-base-100">
        <div className="flex-1 text-3xl">
            <h3>La tienda de ElLautyCraft</h3>
        </div>
        <div className="flex-initial">
            <a className="btn btn-ghost normal-case text-xl">INICIO</a>
            <a className="btn btn-ghost normal-case text-xl">PRODUCTOS</a>
            <a className="btn btn-ghost normal-case text-xl">CONTACTO</a>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;