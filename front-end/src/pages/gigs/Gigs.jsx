import React, { useRef, useState } from 'react';
import './Gigs.scss';
import {gigs} from "../../data"
import GigCard from "../../Components/GigCard/GigCard"
import {useQuery} from "@tanstack/react-query"
import newRequest from '../../utils/newRequest';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales")
  const minRef = useRef();
  const maxRef = useRef();



  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      newRequest.get("/api/v1/gigs/").then((res)=>res.data)
  })

  // console.log(data)

  const reSort = (type)=>{
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className='breadcrumbs'>Fiver  Graphics & Design  </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>{sort === "sales"? "Best Selling" : "Newest"}</span>
            <img src="/img/down.png" alt="" onClick={()=>setOpen(!open)}/>
            { open && (<div className="rightMenu">
              { sort === "sales" ? (<span onClick={()=>reSort("createdAt")}>Newest</span>)
              : 
              (<span onClick={()=>reSort("sales")}>Best Selling</span>)}
            </div>
            )}
          </div>
        </div>
        <div className="cards">
        {gigs.map((gig)=>(
          <GigCard key={gig.id} item={gig}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs
