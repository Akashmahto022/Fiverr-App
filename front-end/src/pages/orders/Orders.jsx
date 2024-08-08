import React from 'react';
import './Orders.scss'
import { Link } from 'react-router-dom';

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }


  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller" }</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders
