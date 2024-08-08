import React from 'react'
import './ProjectsCard.scss';
import { Link } from 'react-router-dom';

const ProjectsCard = ({item}) => {
  return (
    <Link to="/Fiverr-Clon-App" className='link'>
    <div className='projectsCard'>
    <img src={item.img} alt="" />
    <div className="info">
      <img src={item.pp} alt="" />
      <div className="texts">
        <h2>{item.cat}</h2>
        <span>{item.username}</span>
      </div>
    </div>
      
    </div>
    </Link>
  )
}

export default ProjectsCard
