import React from 'react'
import './CategoryGig.scss';
import { Link } from 'react-router-dom';

const CategoryGig = ({item}) => {
  return (
    <Link to="/gigs/?cat=design">
    <div className='categoryGig'>
      <img src={item.img} alt="" />
      <span className='desc'>{item.desc}</span>
      <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CategoryGig
