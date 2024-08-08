import React from 'react';
import './Message.scss';
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className='breadcrumbs'>
          <Link to="/messages"> MESSAGES </Link> JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate incidunt error a eum consequuntur debitis at suscipit molestiae nostrum magni!
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate incidunt error a eum consequuntur debitis at suscipit molestiae nostrum magni!
            </p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate incidunt error a eum consequuntur debitis at suscipit molestiae nostrum magni!
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate incidunt error a eum consequuntur debitis at suscipit molestiae nostrum magni!
            </p>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor quibusdam, dolorum ut rerum recusandae qui eligendi ex numquam obcaecati dicta nobis ducimus. Nulla nemo eligendi porro labore amet beatae non, accusamus ullam? Dolorum, at a sint consectetur inventore natus!
            </p>
          </div>
          <div className="item owner">
            <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" alt="" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate incidunt error a eum consequuntur debitis at suscipit molestiae nostrum magni!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>


      </div>
    </div>
  )
}

export default Message
