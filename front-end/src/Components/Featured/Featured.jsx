import React from 'react';
import './Featured.scss';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
            <h1>Find the right <i>freelance</i> service, right away</h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Search for any service...'/>
                </div>
                <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Website Design</button>
                <button>WordPress</button>
                <button>Logo Design</button>
                <button>AI Services</button>
            </div>
        </div>

        <div className="right">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
