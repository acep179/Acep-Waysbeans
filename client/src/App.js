import React from "react";
import {Routes, Route} from 'react-router-dom'

import {AddProduct, Cart, IncomeTransaction, ListProducts, ProductDetail, Profile, Home} from './pages'

function App() {

  let isAdmin = true

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={isAdmin ? <IncomeTransaction/> : <Home/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/list-products' element={<ListProducts/>}/>
      </Routes>
    </div>
  );
}

export default App;
