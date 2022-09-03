import React from "react";
import {Routes, Route} from 'react-router-dom'

import {AddProductAdmin, Cart, IncomeTransactionAdmin, ListProductsAdmin, ProductDetail, Profile, Home} from './pages'

function App() {

  let isAdmin = true

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={isAdmin ? <IncomeTransactionAdmin/> : <Home/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/add-product' element={<AddProductAdmin/>}/>
        <Route path='/list-products' element={<ListProductsAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
