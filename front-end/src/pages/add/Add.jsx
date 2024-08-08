import React from 'react';
import './Add.scss';

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="section">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="e.g. I will do something I'm relly good at"/>
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web developement</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Image</label>
            <input type="file" multiple/>
            <label htmlFor="">Desciption</label>
            <textarea name="" id="" cols="30" rows="15" placeholder='Berif description to introduce your services to customers'></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. Two Pages web Design'/>
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Short Description of your services'></textarea>
            <label htmlFor="">Delivert time (e.g. 3 days)</label>
            <input type="number" min={1}/>
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g. pages dedign'/>
            <input type="text" placeholder='e.g. file uploading'/>
            <input type="text" placeholder='e.g. setting upa domain'/>
            <input type="text" placeholder='e.g. web hosting'/>
            <input type="text" placeholder='e.g. multiple pages'/>
            <label htmlFor="">Price</label>
            <input type="number" min={4}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
