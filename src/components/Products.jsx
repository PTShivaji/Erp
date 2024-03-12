import React, { useContext, useState } from "react";
import { ProductForm } from "./productForm";
import { productContext } from "../App";

const Products = () => {
    const [create, setCreate] = useState(false)
    const [edit, setEdit] = useState('')
    const {products, productsDispatch} = useContext(productContext)
    const addCancel = () => {
        setCreate(!create)
    }
    const handleDel = (id) => {
        productsDispatch({type: 'DEL_PRO', payload: id})
    }
    const handleEdit = (id) => {
        setEdit(id)
    }
    const cancelEdit = () => {
        setEdit('')
    }
    return (
        <div>
            <h1>Products Component</h1>
            {create ? <ProductForm cancel={addCancel}/> : <button onClick={addCancel}>Add Product</button>}
            <ul>
                {products ? products.map(product=>{
                    return product.id == edit ? <ProductForm {...product} edit={cancelEdit}/> : 
                    <li key={product.id}>
                        id: {product.id}<br/>
                        name: {product.name}<br/>
                        category: {product.category}<br/>
                        price: {product.price}INR<br/>
                        stockQuantity: {product.stockQuantity}<br/>
                        <button onClick={()=>{handleDel(product.id)}}>delete</button>
                        <button onClick={()=>{handleEdit(product.id)}}>edit</button>
                    </li>
                }) : 'loading...'}
            </ul>
        </div>
    )
}

export default Products