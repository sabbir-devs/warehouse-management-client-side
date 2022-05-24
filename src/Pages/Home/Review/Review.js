import React, { useEffect, useState } from "react";
import "./Review.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return (
    <div className="review p-12 my-12">
      <div className="card bg-base-100 grid lg:flex lg:flex-row gap-4 ">
        {reviews.map((review) => (
          <div key={review._id} className="card-body w-full lg:w-1/3 shadow-2xl">
            <h2 className="card-title">{review.name}</h2>
            <p>{review.review}</p>
            <div className="flex items-center jjustify-center list-none my-2 text-2xl text-yellow-500 ">
              <li className="cursor-pointer">
                <AiFillStar></AiFillStar>
              </li>
              <li className="cursor-pointer">
                <AiFillStar></AiFillStar>
              </li>
              <li className="cursor-pointer">
                <AiFillStar></AiFillStar>
              </li>
              <li className="cursor-pointer">
                <AiOutlineStar></AiOutlineStar>
              </li>
              <li className="cursor-pointer">
                <AiOutlineStar></AiOutlineStar>
              </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
