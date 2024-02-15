import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive);

        return()=>{
            window.removeEventListener("scroll", isActive)
        }
    },[])

    const currentUser={
      id: 1,
      username:"Akash",
      isSeller:true
    }

  return (
    <div className={active || pathname !== "/Fiverr-Clon-App" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
        <Link to="/Fiverr-Clon-App" className='link'>
            <span className='text'>fiverr</span>
        </Link>
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>join</button>}
            {currentUser && (
              <div className='user' onClick={()=>setOpen(!open)}>
              <img src="https://img.freepik.com/premium-photo/fire-alphabet-letter-r-isolated-black-background_564276-9258.jpg?w=740" alt="" />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className='link' to="/mygigs">Gigs</Link>
                      <Link className='link' to="/add">Add New Gig</Link>
                    </>
                  )}
                  <Link className='link' to="/orders">Orders</Link>
                  <Link className='link' to="/messages">Message</Link>
                  <Link className='link' to="/Fiverr-Clon-App">Logout</Link>
              </div>}
              </div>
            )}
        </div>
      </div>
        {(active || pathname !== "/Fiverr-Clon-App") && (
      <>
            <hr />
        <div className="menu">
            <Link className='link' to="/Fiverr-Clon-App">
              Graphics & Design
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Video & Animation
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              AI Services
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Digital Marketing
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Music & Audio
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Programming & Tech
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Business
            </Link>
            <Link className='link' to="/Fiverr-Clon-App">
              Lifestyle
            </Link>
        </div>
        <hr />
        </>
        )}
    </div>
  )
}

export default Navbar
