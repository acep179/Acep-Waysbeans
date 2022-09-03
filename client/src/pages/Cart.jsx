import React from 'react'
import { useNavigate } from 'react-router-dom'
import convertRupiah from 'rupiah-format'

import bin from './../assets/bin.png'

// import { API } from '../config/api';
import { Navbar } from './../component'

import { carts } from '../fakeData'

function Cart() {

  const navigate = useNavigate()

  const totalAmount = (array) => {
    let sum = 0;

    array.forEach(item => {
      let price = parseInt(item.product.price * item.qty)
      sum += price;
    });

    return sum;
  }

  const handleModal = () => {
    const modalClose = document.getElementById('modalClose')
    modalClose.click()
    navigate('/profile')
  }

  const handleTransaction = (e) => {
    try {
      e.target.dataset.bsToggle = "modal"
      e.target.dataset.bsTarget = "#thanksModal"
      e.target.click()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container d-flex justify-content-center'>
      <Navbar />
      <div className='text-red' style={{ marginTop: 90, width: '90%' }}>

        <div onClick={handleModal} className="modal fade" id="thanksModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div data-bs-dismiss="modal" id='modalClose'></div>
          <div onClick={handleModal} className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content thanks-message">

              <div className="modal-body">
                <p>Thank you for ordering in us, please wait to verify your order</p>
              </div>

            </div>
          </div>
        </div>

        <h3 >My Cart</h3>
        <div className='row justify-content-between'>
          <p>Review Your Order</p>
          <div className='col-7 '>
            <div className='cart row pt-3 mb-4'>

              {carts.map((cart) => {
                return (

                  <div className='d-flex justify-content-between mb-3' key={cart.id}>
                    <div className='cart-image col-2' style={{ backgroundImage: `url(${cart.product.img})` }}>
                    </div>
                    <div className='col-8 d-flex flex-column justify-content-evenly align-items-start'>
                      <p className='m-0 fw-bold'>{cart.product.title}</p>
                      <p className='m-0'>
                        <span className='fw-bolder fs-4'>- </span>
                        <span className='bg-pink px-3 rounded'>{cart.qty}</span>
                        <span className='fw-bolder fs-4'> +</span>
                      </p>
                    </div>
                    <div className='col-2 text-end d-flex flex-column justify-content-evenly align-items-end'>
                      <p className='m-0'>{convertRupiah.convert(cart.product.price * cart.qty)}</p>
                      <img className='cursor-pointer' src={bin} alt='erase' style={{ height: 20 }} />
                    </div>
                  </div>

                )
              })}

            </div>
          </div>
          <div className='col-4 h-50'>
            <div >
              <div className='cart d-flex justify-content-between pt-2 mb-3'>
                <div className='d-flex flex-column'>
                  <p className='mb-2'>Subtotal</p>
                  <p className='mb-2'>Qty</p>
                </div>

                <div className='d-flex flex-column'>
                  <p className='mb-2'>{carts ? convertRupiah.convert(totalAmount(carts)) : 0}</p>
                  <p className='mb-2 text-end'>{carts ? carts.length : 0}</p>
                </div>
              </div>

              <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>{carts ? convertRupiah.convert(totalAmount(carts)) : 0}</p>
              </div>

            </div>

            <div className="d-grid gap-2 mt-5">
              <button
                className="btn btn-red"
                type="button"
                onClick={(e) => handleTransaction(e)}
              >
                Pay
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart