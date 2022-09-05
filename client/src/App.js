import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'

import {AddProductAdmin, Cart, IncomeTransactionAdmin, ListProductsAdmin, ProductDetail, Profile, Home} from './pages'
import { setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const [state] = useContext(UserContext)
  let isLogin = state.isLogin
  let isAdmin = state.user.status === "admin" ? true : false

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={ isLogin ? (isAdmin ? <IncomeTransactionAdmin/> : <Home />) : <Home/>}/>
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
