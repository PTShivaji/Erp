import { useContext, useState } from "react"
import { productContext } from "../App"

export function ProductForm(props) {
    const {cancel, edit} = props
    const {id : id1, name: name1, price: price1, category, stockQuantity} = props
    const [name, setName] = useState(name1 ? name1 : '')
    const [cat, setCat] = useState(category ? category : '')
    const [price, setPrice] = useState(price1 ? price1 : '')
    const [stock, setStock] = useState(stockQuantity ? stockQuantity : '')
    const {productsDispatch} = useContext(productContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {id: Number(new Date()),name, category: cat, price: Number(price), stockQuantity:stock}
        productsDispatch({type: 'ADD_PRO', payload: data})
        cancel()
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const data = {id: id1,name, category: cat, price: Number(price), stockQuantity:stock}
        productsDispatch({type: 'EDIT_PRO', payload: data})
        edit()
    }
    return (
        <div>
            <h2>{edit ? 'Edit Product' : 'Add Product'}</h2>
            <form onSubmit={edit ? handleEdit : handleSubmit}>
                <label htmlFor="name">name</label><br/>
                <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
                <label htmlFor="cat">category</label><br/>
                <input type="text" id="cat" value={cat} onChange={(e)=>{setCat(e.target.value)}} /><br/>
                <label htmlFor="price">price</label><br/>
                <input type="number" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} /><br/>
                <label htmlFor="stock">stock quantity</label><br/>
                <input type="number" id="stock" value={stock} onChange={(e)=>{setStock(e.target.value)}} /><br/>
                <br/>
                <input type='submit'/><button onClick={edit ? edit : cancel}>cancel</button>
            </form>
        </div>
    )
}