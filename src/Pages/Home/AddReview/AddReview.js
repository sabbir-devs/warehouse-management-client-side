import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./AddReview.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleReview = (event) => {
    event.preventDefault();
    const reviewValue = event.target.review.value;

    const review = {
         name: user?.displayName,
         review: reviewValue 
        };
    fetch("http://localhost:5000/reviews", {
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
    })
  };
  return (
    <div className="add-review grid items-center justify-center mt-4 lg:mt-12">
      <div className="card w-96 bg-gray-700 text-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Share Your Opinion</h2>
          <form onSubmit={handleReview}>
            <input
              type="text"
              name="name"
              value={user.displayName}
              className="input input-bordered w-full max-w-xs"
              readOnly
              id=""
            />
            <textarea
              name="review"
              id=""
              className="input input-bordered w-full max-w-xs mt-5"
              placeholder="Write Your Opinion"
            ></textarea>
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
