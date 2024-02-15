import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">Fiverr Graphics & Design</span>
          <h1>I will design stunning book covers</h1>
          <div className="user">
            <img
              className="pp"
              src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a92b0f124a3ca439715215dafcd174f3-1692202916833/ff0f98ab-ddea-4c45-8db7-3f6e0e5599b2.jpg"
              alt=""
            />
            <span>John Mahto</span>
            <div className="stars">
              <img src="../../img/star.png" alt="" />
              <img src="../../img/star.png" alt="" />
              <img src="../../img/star.png" alt="" />
              <img src="../../img/star.png" alt="" />
              <img src="../../img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/311467796/original/c2f48b2b8728875d6ebd6108d08723c9dd8649cd/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/311467796/original/0c8a011191b3170db9994e16ef21fbbc19c35779/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/311467796/original/a184a6adc17d4595b02f5eaa41b3697403e3ce20/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/57b0a6d4997fb18b6e8ff7763b8eded8-1695330021/Holdn%20it%20Down_mockup_3/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
              alt=""
            />
            <img
              src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/988a6250e97879ba21c58329d6febf27-1695047721/Come%20Hell%20or%20High%20Water_mockup%202/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            Ciao, I'm Elisabetta! In my career I have created more than 3000
            book covers in the formats: Kindle Paperback Audiobook For every
            Niche, and Keywords! I know how important it is to take care of the
            cover of your book down to the smallest detail: I only create high
            quality works that stand out from the competition. I believe that
            effective communication is the key to being able to create your
            made-to-measure book cover and help you grow your sales
            exponentially, which is why I guarantee maximum attention and
            availability for each project! You will Receive: Completely Free 3D
            Mockup for All Packages Commercial Use Rights Print-Ready E-Book,
            Kindle Cover, Kdp Book Cover Delivery in JPG, PDF, PNG (300 dpi/CMYK
            and RGB) 100% Money-Back- Guarantee FREE Unlimited Revisions for All
            Packages! Tell me about your project, I can't wait to meet you!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            assumenda maiores nihil ex beatae rem harum quibusdam a ab mollitia
            eaque quas, tempore at libero ipsam odit possimus vero tenetur
            corrupti voluptas ea. Porro id, animi illum est inventore rem!
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a92b0f124a3ca439715215dafcd174f3-1692202916833/ff0f98ab-ddea-4c45-8db7-3f6e0e5599b2.jpg"
                alt=""
              />
              <div className="info">
                <span>John Mahto</span>
                <div className="stars">
                  <img src="../../img/star.png" alt="" />
                  <img src="../../img/star.png" alt="" />
                  <img src="../../img/star.png" alt="" />
                  <img src="../../img/star.png" alt="" />
                  <img src="../../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English, Italian</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Apr 2023</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">about 4 hours</span>
                </div>
              </div>
              <hr />
              <p>
                Ciao, I'm Elisabetta, a seasoned graphic designer with a decade
                of experience. Style and sophistication are my guiding
                principles. No matter your project, I'll assist you in crafting
                it with top-notch quality. From concept to completion, I'll
                accompany you every step of the design journey. Together, we'll
                delve into your preferences, style, and crucial elements. Share
                your project—I'm eager to connect!
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>See all reviews</h2>
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
                enough to consider and one used an image that worked but I have
                decided to find a designer who can present me with a few
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
                enough to consider and one used an image that worked but I have
                decided to find a designer who can present me with a few
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
                enough to consider and one used an image that worked but I have
                decided to find a designer who can present me with a few
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
        </div>
        <div className="right">
          <div className="price">
            <h3>Book Covers</h3>
            <h2>$ 60.80</h2>
          </div>
          <p>
            This package includes the front cover, JPG/PDF, Source File, 3D Mock
            Up, Unlimited Revisions
          </p>
          <div className="details">
            <div className="item">
              <img src="../../img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="../../img/recycle.png" alt="" />
              <span>Unlimited Revision</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="../../img/greencheck.png" alt="" />
              <span>Back & spine designs</span>
            </div>
            <div className="item">
              <img src="../../img/greencheck.png" alt="" />
              <span>Include source file</span>
            </div>
            <div className="item">
              <img src="../../img/greencheck.png" alt="" />
              <span>Include social media kit</span>
            </div>
            <div className="item">
              <img src="../../img/greencheck.png" alt="" />
              <span>3D mockup</span>
            </div>
            <div className="item">
              <img src="../../img/greencheck.png" alt="" />
              <span>Audiobook cover (ACX)</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
