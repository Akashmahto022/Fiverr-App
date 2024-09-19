import React from 'react'
import './Review.scss'

const Review = () => {
  return (
    <div className="review">
    <hr />
    <div className="item">
      <div className="user">
        <img
          className="pp"
          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a92b0f124a3ca439715215dafcd174f3-1692202916833/ff0f98ab-ddea-4c45-8db7-3f6e0e5599b2.jpg"
          alt=""
        />
        <div className="info">
          <span>John Mahto</span>
          <div className="country">
            <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
              alt=""
            />
            <span>United State</span>
          </div>
        </div>
      </div>
      <div className="stars">
        <img src="../../img/star.png" alt="" />
        <img src="../../img/star.png" alt="" />
        <img src="../../img/star.png" alt="" />
        <img src="../../img/star.png" alt="" />
        <img src="../../img/star.png" alt="" />
        <span>5</span>
      </div>
      <p>
        The designer created interesting custom images, but the brief
        could have been more closely followed. One design was bright
        enough to consider and one used an image that worked but I
        have decided to find a designer who can present me with a few
        concepts that fit the brief and is in less of a hurry to close
        the order.
      </p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="../../img/like.png" alt="" />
        <span>Yes</span>
        <img src="../../img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
    <hr />
  </div>
  )
}

export default Review