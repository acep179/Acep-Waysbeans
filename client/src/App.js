import React from "react";
import {Routes, Route} from 'react-router-dom'

import {AddProduct, Cart, IncomeTransaction, ListProducts, ProductDetail, Profile, Home} from './pages'

function App() {

  let isAdmin = false

  return (
    <>
      <Routes>
        <Route path='/' element={isAdmin ? <IncomeTransaction/> : <Home/>}/>
        <Route path='/product-detail' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/list-products' element={<ListProducts/>}/>
      </Routes>
    </>
  );
}

export default App;
