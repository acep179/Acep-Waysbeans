import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { useMutation, useQuery } from 'react-query';
import convertRupiah from 'rupiah-format'

import { Navbar } from './../component'
// import { API } from '../config/api';

import { products } from '../fakeData'

function ProductDetail() {

  const navigate = useNavigate()
  const { id } = useParams()

  const handleOnClick = (e) => {
    e.preventDefault()

    navigate("/cart")
  }


  return (
    <>
      <Navbar />
      <div className='container d-flex justify-content-center'>
        <div className='row align-items-center justify-content-center' style={{ marginTop: 150, marginBottom: 50, width: '90%' }}>
          <img className='col-5 me-3' src={products[id - 1].img} alt={products[id - 1].title} />
          <div className='col-6 ms-3 text-red'>
            <h1 className='fw-bolder'>{products[id - 1].title}</h1>
            <p className='mb-5'>Stock: {products[id - 1].qty}</p>
            <p style={{ textAlign: 'justify' }}>{products[id - 1].desc}</p>
            <p className='mb-5 fs-4 fw-bold text-end'>{convertRupiah.convert(products[id - 1].price)}</p>

            <div className='d-grid gap-2'>
              <button onClick={(e) => handleOnClick(e)} className='btn btn-red d-grid gap-2'>Add Cart</button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProductDetail