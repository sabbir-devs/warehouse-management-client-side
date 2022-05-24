import React, { useEffect, useState } from "react";
import "./Review.css";



const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reverse()));
  }, [reviews]);
  return (
    <div className="review p-12 mt-12">
      <h1 className="text-5xl text-center">Customer Review</h1>
      <div className="card bg-base-100 grid lg:flex lg:flex-row gap-4 ">
        {reviews.reverse().slice(0, 3).map((review) => (
          <div key={review._id} className="card-body w-full lg:w-1/3 shadow-2xl">
            <h2 className="card-title">{review.name}</h2>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
