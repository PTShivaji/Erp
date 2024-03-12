import React, { useContext } from "react";
import { productContext } from "../App";

const Orders = () => {
    const {orders} = useContext(productContext)
    return (
        <div>
            <h1>Orders Component</h1>
            <ul>
            {orders ? orders.map(order=>{
                    return ( 
                    <li key={order.id}>
                        id: {order.id}<br/>
                        name: {order.name}<br/>
                        category: {order.category}<br/>
                        price: {order.price}INR<br/>
                        stockQuantity: {order.stockQuantity}<br/>
                        status: {order.status}<br/>
                        expected date: {order.expectedDate}
                    </li>)
                }) : 'loading...'}
            </ul>
        </div>
    )
}

export default Orders