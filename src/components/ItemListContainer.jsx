import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../productos"
import { ItemList } from "./ItemList"
import { Loader } from './Loader'

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
                { productos.map(p => <ItemList key={p.id} { ...p } />) }
            </div> 
            :
            <Loader/>
        }
        </>
    )

}

export default ItemListContainer;