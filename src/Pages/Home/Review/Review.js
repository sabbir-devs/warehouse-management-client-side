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
    <div className="review p-12 mt-12 text-white">
      <h1 className="text-5xl text-center">Customer Review</h1>
      <div className="card bg-base-100 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {reviews?.map((review) => (
          <div key={review._id} className="card-body w-full shadow-2xl">
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
