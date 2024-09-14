import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const GigCard = ({ item }) => {
  console.log(item);


  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: () =>
      newRequest.get(`/api/v1/users/${item.userId}`).then((res) => {
        console.log(res.data);
        return res.data;
      }),
  });

  return (
    <>
      <Link to={`/gig/${item._id}`} className="link">
        <div className="gigcard">
          <img src={item.coverImage} alt="" />
          <div className="info">
            {isLoading ? (
              "loading..."
            ) : error ? (
              "Something went wrong"
            ) : (
              <div className="user">
                <img src={data.image || "/img/noavatar.jpg"} alt="" />
                <span>{data.username}</span>
              </div>
            )}
            <p>{item.description}</p>
            <div className="star">
              <img src="../../img/star.png" alt="" />
              <span>
                {!isNaN(item.totalStars / item.starNumber) &&
                  Math.round(item.totalStars / item.starNumber)}
              </span>
            </div>
          </div>
          <hr />
          <div className="details">
            <img src="../../img/heart.png" alt="" />
            <div className="price">
              <span>Starting At</span>
              <h2>${item.price}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GigCard;
