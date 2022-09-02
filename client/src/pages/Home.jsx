import React from 'react'
import convertRupiah from 'rupiah-format'

import { Navbar, AuthModal } from '../component'

import products from './../dataDami/productsData'

import heroBg from './../assets/jumbotron.png'
import { useNavigate } from 'react-router-dom'

function Home() {

  // const [state] = useContext(UserContext)
  const navigate = useNavigate()

  //. Fetching product data from database
  // let { data: products } = useQuery('productsCache', async () => {
  //   const response = await API.get('/products');
  //   return response.data.data
  // });

  const detailProduct = (productID) => {
    // const loginButton = document.getElementById("loginButton")
    //   if (state.isLogin === true) {
    navigate(`/product-detail/${productID}`)
    //   } else {
    // loginButton.click()
    //   }
  }

  return (
    <div>
      <Navbar />
      <AuthModal />

      <header className='mb-5' style={{ marginTop: 150 }}>
        <img className='mx-auto d-block' src={heroBg} alt="jumbotron" width='75%' />
      </header>
      <main className='mx-auto text-red' style={{ width: '92%' }}>
        <h4 className='mb-5'>Let's Order</h4>
        <div className='row'>
          {products.map((item) => {
            return (
              <div key={item.id} className='col-3 mb-5 px-3'>
                <div className='card bg-pink p-0 cursor-pointer' onClick={() => detailProduct(item.id)}>
                  <img src={item.img} className="card-img-top w-100 mb-2" alt={item.name} />
                  <div className="card-body p-3">
                    <div>
                      <h5 className="card-title mb-2 text-red">{item.title}</h5>
                    </div>
                    <p className="card-text mb-2">{convertRupiah.convert(item.price)}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>

    </div>
  )
}

export default Home