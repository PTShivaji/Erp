import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../App";

const Dashboard = () => {
    const {products, orders} = useContext(productContext)
    return (
        <div>
            <h1>Dashboard Component</h1>
            <h2>Total Products - {products?.length} <Link to='/products'>{'link'}</Link></h2>
            <h2>Total Orders - {orders?.length} <Link to='/orders'>{'link'}</Link></h2>
        </div>
    )
}

export default Dashboard