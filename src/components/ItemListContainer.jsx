import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../productos"
import { Producto } from "./Producto"

const ItemListContainer = () => {

    const { category } = useParams()

    const [productos, setProductos] = useState([])

    useEffect( () => {

        if (category) {
            getProducts()
            .then( res => {
                setProductos(res.filter(p => p.category === category))
            })
            .catch( error => {console.error(error);})
        } else {
            getProducts()
            .then( res => {
                setProductos(res)
            })
            .catch( error => {console.error(error);})
        }
    }, [category])

    const getProducts = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    }

    return (
        <>
        {
            productos.length 
            ? 
            <div className='flex flex-wrap justify-center'>
                { productos.map(p => <Producto key={p.id} { ...p } />) }
            </div> 
            :
            <div className='flex justify-center mt-52'>
                <svg class="animate-spin h-80 w-80 text-white" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            
        }
        </>
    )

}

export default ItemListContainer;