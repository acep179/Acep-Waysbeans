import React, { useContext } from 'react'
import convertRupiah from 'rupiah-format'

import { Navbar, AuthModal } from '../components'

import heroBg from './../assets/jumbotron.png'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { API } from '../config/api'
import { useState } from 'react'
import { useEffect } from 'react'

function Home() {

  const [state] = useContext(UserContext)
  const navigate = useNavigate()
  const [products, setProducts] = useState([])

  //. Fetching product data from database
  const getProductsData = async () => {
    const response = await API.get('/products');
    setProducts(response.data.data)
  }

  const detailProduct = (productID) => {
    const loginButton = document.getElementById("loginButton")
    if (state.isLogin === true) {
      navigate(`/product-detail/${productID}`)
    } else {
      loginButton.click()
    }
  }

  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <>
      <Navbar />
      <AuthModal />

      <header className='mb-5' style={{ marginTop: 150 }}>
        <img className='img-fluid' src={heroBg} alt="jumbotron" />
      </header>
      <main className='mx-auto text-red' style={{ width: '92%' }}>
        <h4 className='mb-5'>Let's Order</h4>

        <div className='row'>
          {products.map((item) => {
            return (
              <div key={item.id} className='col-3 mb-5 px-3'>
                <div className='card bg-pink p-0 cursor-pointer' onClick={() => detailProduct(item.id)}>
                  <img src={item.img} className="card-img-top w-100 mb-2" alt={item.title} />
                  <div className="card-body">
                    <div>
                      <h5 className="card-title mb-3 text-red">{item.title}</h5>
                    </div>
                    <p className="card-text mb-2">{convertRupiah.convert(item.price)}</p>
                    <p className="card-text mb-2">Stock: {item.stock}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </main>

    </>
  )
}

export default Home