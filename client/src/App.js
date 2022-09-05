import React, { useContext, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'

import {AddProductAdmin, Cart, IncomeTransactionAdmin, ListProductsAdmin, ProductDetail, Profile, Home} from './pages'
import { AdminRoute, LoginRoute } from "./components";
import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const [state, dispatch] = useContext(UserContext)

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  },);

  let isLogin = state.isLogin
  let isAdmin = state.user.status === "admin" ? true : false

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={ isLogin ? (isAdmin ? <IncomeTransactionAdmin/> : <Home />) : <Home/>}/>
        <Route exact path="/" element={<LoginRoute/>}>
          <Route path='/product-detail/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route exact path="/" element={<AdminRoute/>}>
            <Route path='/add-product' element={<AddProductAdmin/>}/>
            <Route path='/list-products' element={<ListProductsAdmin/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
