import React, {createContext, useReducer} from 'react';
import {Link, BrowserRouter} from 'react-router-dom'
import productsReducer from './reducers/productsReducer';
import { Navbar } from './components/Navbar';
import { RouteList } from './components/RouteList';
import ordersReducer from './reducers/ordersReducer';
import { orderData, productData } from './data/data';

export const productContext = createContext('product data')
function App() {
  const [products, productsDispatch] = useReducer(productsReducer, [...productData])
  const [orders, ordersDispatch] = useReducer(ordersReducer, [...orderData])
  return (
    <BrowserRouter>
      <productContext.Provider value={{products, productsDispatch, orders, ordersDispatch}}>
      <Link to='/'><h1>ERP APP</h1></Link>
      <Navbar/>
      <hr style={{height: '1px', backgroundColor: 'black'}}/>
      <RouteList/>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
