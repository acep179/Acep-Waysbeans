import React from 'react'
// import { API } from '../config/api';

import { Navbar, TransactionCard } from '../components'
// import { useQuery } from 'react-query';

import { transactions } from '../fakeData'

function IncomeTransactionAdmin() {

  // let { data: transactions } = useQuery('transactionsCache', async () => {
  //   const response = await API.get('/transactions');
  //   return response.data.data
  // });

  return (
    <div className='container d-flex justify-content-center'>

      <Navbar />

      {transactions.map((item) => (
        <div key={item.id} className="modal fade position-absolute" id={`transactionModal${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered position-relative">
            <div className="modal-content position-relative">

              <TransactionCard
                key={item.id}
                id={item.id}
                date={item.updated_at}
                status={item.status}
                subTotal={item.total}
                cart={item.carts}
              />

            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 200, width: '90%' }}>

        <h3 className='text-red mb-4'>Income Transaction</h3>

        <table className="table table-hover">
          <thead>
            <tr className='table-secondary'>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Products Order</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <tr className='cursor-pointer' data-bs-toggle="modal" data-bs-target={`#transactionModal${transaction.id}`} key={transaction.id}>
                  <td>{index + 1}</td>
                  <td>{transaction.buyer.fullName}</td>
                  <td>{transaction.buyer.profile.address}</td>
                  <td>{transaction.buyer.profile.post_code}</td>
                  <td>{transaction.carts.map((cart) => (`${cart.product.title}, `))}</td>
                  <td className={`text-${transaction.status === 'Waiting Approve' ? 'warning' :
                    transaction.status === 'Success' ? 'success' :
                      transaction.status === 'Cancel' ? 'danger' : 'info'
                    }`}>
                    {transaction.status}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default IncomeTransactionAdmin