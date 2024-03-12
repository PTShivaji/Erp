import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Orders from "./Orders";

export function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/orders' element={<Orders/>} />
        </Routes>
    )
}