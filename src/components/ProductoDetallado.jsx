import { useState } from "react"

export const ProductoDetallado = ({ producto }) => {

    const [count, setCount] = useState(1)

    console.log(producto.price);

    const sumar = () => {
        if (producto.stock > count) {
            setCount( count => count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount( count => count - 1)
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h3 className="text-3xl py-4 font-bold">{producto.title}</h3>
            <img className="py-4 max-h-96" src={producto.img} alt="imagen del producto" />
            <h5 className="py-4">{producto.description}</h5>
            <h5 className="py-4">Precio: ${producto.price}</h5>
            <h5 className="py-4">Unidades disponibles: {producto.stock}</h5>
            <div className="py-4">
                <button onClick={restar} className="btn bg-red-700 hover:bg-red-800 text-black text-xl">-</button>
                <span className="text-xl m-2">{count}</span>
                <button onClick={sumar} className="btn bg-green-500 hover:bg-green-600 text-black text-xl">+</button>
            </div>
            <button className="py-4 btn">AGREGAR AL CARRITO</button>
        </div>
    )
}