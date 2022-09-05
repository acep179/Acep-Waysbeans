import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { useMutation, useQuery } from 'react-query';
import convertRupiah from 'rupiah-format'

import { Navbar } from './../components'
import { API } from '../config/api';

import { useState } from 'react';

function ProductDetail() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const getProductData = async () => {
    const response = await API.get(`/product/${id}`);
    console.log(response.data.data)
    setProduct(response.data.data)
  }

  const handleOnClick = (e) => {
    e.preventDefault()

    navigate("/cart")
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <>
      <Navbar />
      <div className='container d-flex justify-content-center'>
        <div className='row align-items-center justify-content-center' style={{ marginTop: 150, marginBottom: 50, width: '90%' }}>
          <img className='col-5 me-3' src={product.img} alt={product.title} />
          <div className='col-6 ms-3 text-red'>
            <h1 className='fw-bolder'>{product.title}</h1>
            <p className='mb-5'>Stock: {product.qty}</p>
            <p style={{ textAlign: 'justify' }}>{product.desc}</p>
            <p className='mb-5 fs-4 fw-bold text-end'>{convertRupiah.convert(product.price)}</p>

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