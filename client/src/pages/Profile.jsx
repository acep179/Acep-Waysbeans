import React from 'react'
import { Navbar, TransactionCard } from './../components'
// import { UserContext } from '../context/userContext'
// import { useQuery } from 'react-query';
// import { API } from '../config/api';
import userPhoto from './../assets/user_photo.png'
import { users, transactions } from '../fakeData'

function Profile() {
  return (
    <div className='container d-flex justify-content-center'>
      <Navbar />
      <div className='row' style={{ marginTop: 120, width: '90%' }}>
        <div className='col-5'>
          <h3 className='text-red mb-4'>My Profile</h3>
          <div className='row'>
            <img className='col-5' src={users[0].profile.image ? users[0].profile.image : userPhoto} alt={users[0].fullName} />
            <div className='col-6'>
              <h5 className='mb-2 text-brown'>Full Name</h5>
              <p>{users[0].fullName}</p>
              <h5 className='text-brown'>Email</h5>
              <p>{users[0].email}</p>
            </div>
          </div>
        </div>

        <div className='col-7'>
          <h3 className='text-brown mb-4'>My Transaction</h3>
          {transactions.map((item) => {
            return <TransactionCard
              key={item.id}
              mb='1rem'
              id={item.id}
              date={item.updated_at}
              status={item.status}
              subTotal={item.total}
              cart={item.carts}
            />
          })}

        </div>

      </div>
    </div>
  )
}

export default Profile