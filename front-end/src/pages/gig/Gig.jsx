import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Review from "../../Components/review/Review";
import Reviews from "../../Components/reviews/Reviews"

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/api/v1/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/api/v1/users/${data.userId}`).then((res) => {
        return res.data;
      }),
  });


  return (
    <div className="gig">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">Fiverr Graphics & Design</span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "something went wrong"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.image || "../../img/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="../../img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/311467796/original/0c8a011191b3170db9994e16ef21fbbc19c35779/create-unique-elegant-book-cover-design-or-kindle-cover.jpg"
                alt=""
              />
            </Slider>
            <h2>About this gig</h2>
            <p>{data.description}</p>
            <div className="seller">
              <h2>About the seller</h2>
              {isLoadingUser ? (
                "loading..."
              ) : errorUser ? (
                "something went wrong!"
              ) : (
                <div className="user">
                  <img
                    src={dataUser.img || "../../img/noavatar.jpg"}
                    alt=""
                  />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="../../img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
              )}
              <div className="box">
                <div className="items">
                  <div className="item">
                    <span className="title">From</span>
                    <span className="desc">{"country"}</span>
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
                 {"dataUser.description"}
                </p>
              </div>
            </div>

                <Reviews gigId={id}/>

          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ 60.80</h2>
            </div>
            <p>{data.shortDescription}</p>
            <div className="details">
              <div className="item">
                <img src="../../img/clock.png" alt="" />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src="../../img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revision</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((featured) => (
                <div className="item" key={featured}>
                  <img src="../../img/greencheck.png" alt="" />
                  <span>{featured}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
