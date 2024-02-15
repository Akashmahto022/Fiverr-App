import React from 'react';
import './MyGigs.scss'
import { Link } from 'react-router-dom';

const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link className="link" to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>90</td>
            <td>123</td>
            <td>
              <img className='delete' src="../../img/delete.png" alt="" />
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
              <img className='delete' src="../../img/delete.png" alt="" />
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
              <img className='delete' src="../../img/delete.png" alt="" />
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
              <img className='delete' src="../../img/delete.png" alt="" />
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
              <img className='delete' src="../../img/delete.png" alt="" />
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
              <img className='delete' src="../../img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
