import { useCart } from "./CartContext"
import Swal from 'sweetalert2'

const CartView = () => {

  const { items, clearCart, totalPrecioCarrito, deleteItem } = useCart()

  const total = totalPrecioCarrito()

  const botonEliminar = (id) => {
    deleteItem(id)
  }

  const botonComprar = () => {
    Swal.fire({
        title: 'Compra realizada!',
        icon: 'success',
      })
      clearCart()
  }

  return (
    <div className="m-20 text-xl text-center">
      { items.length === 0 ?
        <h1 className="text-4xl m-10">¡No tenes productos en el carrito! </h1>
        :
        <div>
            <h1 className="text-4xl">Productos en el carrito</h1>
            <div className="my-10">{ items.map( i => 
                <div className="my-5 border-2 border-green-50">
                    <img className="inline-block h-72" src={i.img}/>
                    <li className="list-none" key={i.id}>Producto: {i.title} ----- Cantidad: {i.cantidad} ----- Precio por cada unidad: ${i.price}</li>
                    <button className="btn inline-block my-10" onClick={() => botonEliminar(i.id)}>Eliminar del carrito</button>
                </div>) }
            </div>
          <span className="text-2xl">TOTAL: ${total}</span><br/><br/>
          <button className="btn" onClick={botonComprar}>Comprar</button>
          <button className="btn ml-10" onClick={clearCart}>Vaciar carrito</button>
        </div>
      }
    </div>
  )
}
export default CartView