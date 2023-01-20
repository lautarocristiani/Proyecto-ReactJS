import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../productos"
import { ItemDetail } from "./ItemDetail"
import { Loader } from "./Loader"

export const ItemDetailContainer = () => {
    
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getItemDetail(id)
        .then( res => {
            setProducto(res);
        })
        .catch( error => {console.error(error)})
    }, [])

    const getItemDetail = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(p => p.id == id))
            }, 2000);
        })
    }

    return (
        <>
        {
            Object.entries(producto).length === 0
            ?
            <Loader/>
            :
            <div>
                <ItemDetail producto={producto}/>
            </div>
        }
        </>
    )
}