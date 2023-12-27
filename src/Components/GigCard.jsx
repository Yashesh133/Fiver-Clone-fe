import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard border border-gray-300 mb-8 w-[324px] hp[370px]">
        <img src={item.img} alt="" className="w-full h-1/2 object-cover" />
        <div className="info p-5 flex flex-col gap-5">
          <div className="user flex items-center gap-2">
            <img src={item.pp} alt="" className="w-6 h-6 rounded-full object-cover" />
            <span>{item.username}</span>
          </div>
          <p className="text-gray-700">{item.desc}</p>
          <div className="star flex items-center gap-2">
            <img src="./assets/star.png" alt="" className="h-5 w-5" />
            <span className="text-yellow-500 font-bold">{item.star}</span>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="detail p-5 flex items-center justify-between">
          <img src="./img/heart.png" alt="" className="w-4 h-4 cursor-pointer object-cover" />
          <div className="price text-right">
            <span className="text-gray-500 text-xs">STARTING AT</span>
            <h2 className="text-gray-700 text-lg font-light">
              $ {item.price}
              <sup className="text-sm font-light">99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
