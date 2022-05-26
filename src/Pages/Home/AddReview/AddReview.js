import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./AddReview.css";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
    const reviewValue = event.target.review.value;
    const rating = event.target.rating.value;

    const review = {
         name: user?.displayName,
         review: reviewValue,
         rating: rating
        };
    fetch("https://damp-plateau-02842.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify(review)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("Review Added successful");
      event.target.reset()
    })
  };
  return (
    <div className="add-review bg-slate-800 py-5 grid items-center justify-center mt-4 lg:mt-12">
      <div className="card w-96 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Share Your Opinion</h2>
          <form onSubmit={handleReview}>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs"
              readOnly
              id=""
              required
            />
            <textarea
              name="review"
              id=""
              className="textarea w-full max-w-xs mt-5"
              placeholder="Write Your Opinion"
            ></textarea>
            <input
              type="number"
              name="rating"
              placeholder="Rating 0-5"
              className="input mt-2 input-bordered w-full max-w-xs"
              id=""
              required
            />
            <input
              type="submit"
              className="btn btn-outline mt-4"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
