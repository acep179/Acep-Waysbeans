import React from 'react'
import convertRupiah from 'rupiah-format'

import { Navbar } from '../components'

import { products } from '../fakeData'

function ListProducts() {
  return (
    <>
      <Navbar />

      {products.map((item) => (
        <div key={item.id} className="modal fade position-absolute" id={`productDescModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered position-relative">
            <div className="modal-content position-relative">
              <div className='modal-header'>
                <h5 class="modal-title">{item.title}</h5>
              </div>
              <div className='modal-body'>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 150, width: '90%' }}>

        <h3 className='text-red mb-4'>Income Transaction</h3>

        <table className="table table-hover align-middle table-bordered">
          <thead>
            <tr className='table-secondary text-center'>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td><img className='img-fluid' src={product.img} alt={product.title} width='50px' /></td>
                  <td>{product.title}</td>
                  <td>{product.qty}</td>
                  <td>{convertRupiah.convert(product.price)}</td>
                  <td className='cursor-pointer' data-bs-toggle="modal" data-bs-target={`#productDescModal${product.id}`}>{product.desc.slice(0, 50)}...</td>
                  <td className='text-white d-flex'>
                    <button className='badge bg-danger me-1 flex-grow-1'>Delete</button>
                    <button className='badge bg-success ms-1 flex-grow-1'>Update</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default ListProducts