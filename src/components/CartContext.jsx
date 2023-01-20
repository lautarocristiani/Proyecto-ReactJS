import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addToCart: () => {},
  clearCart: () => {}
})

const useCart = () => {
  return useContext( CartContext )
}

const CartContextProvider = ( { children } ) => {

  const [items, setItems] = useState([])

  const addToCart = (item, cantidad) => {
    if (items.length == 0) {
        setItems([{...item, cantidad}])
    } else {
        const findedItem = items.find(i => i.id === item.id)
        if (!findedItem) {
            setItems([...items, {...item, cantidad}])
        }else{
            const filteredItems = items.filter(i => i.id !== item.id)
            setItems([...filteredItems, {...findedItem, cantidad: findedItem.cantidad + cantidad}])
        }
    }
  }

  const totalPrecioCarrito = () =>{
    return items.reduce((acc, item) => acc + item.cantidad * item.price, 0)
  }

  const deleteItem = (id) => {
    const newCart = items.filter(item => item.id !== id) 
    setItems(newCart)
  }

  const clearCart = () => {
    setItems([])
  }

  const context = {
    items: items,
    addToCart: addToCart,
    clearCart: clearCart,
    totalPrecioCarrito: totalPrecioCarrito,
    deleteItem: deleteItem
  }

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider, useCart }