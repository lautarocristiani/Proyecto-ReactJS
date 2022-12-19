import { Link } from "react-router-dom";

export const Producto = ({ stock, title, img, price, id}) => {
    return (
        <div className="inline-block">
            <div className="flex flex-col items-center border-2 border-green-50 rounded-xl box-content w-96 m-3">
                <h3 className="py-2 text-xl font-bold">{title}</h3>
                <img className="py-2 max-h-72" src={img} alt="imagen del producto"/>
                <h5 className="py-2 text-lg">${price}</h5>
                <h5 className="py-2 text-lg">{stock} unidades</h5>
                <Link to={`/item/${id}`}><button className="btn mb-2">VER MÁS</button></Link>
            </div>
        </div>
    )
}