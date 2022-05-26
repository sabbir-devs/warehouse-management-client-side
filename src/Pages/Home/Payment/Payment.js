import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Loading from "../Loading/Loading";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const stripePromise = loadStripe(
  "pk_test_51L3XvfCIuYi8Wud8APhdh9A2wFoGashWgOW4iI38BSPA2oYx97XSjhTl9QRO76Msurs4E9mNPoPCtDzZBzGxsv7q00Xsg7qcwv"
);
const Payment = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate();
  const { payId } = useParams();
  const urli = `https://damp-plateau-02842.herokuapp.com/orders/${payId}`;
  const { data: orders, isLoading } = useQuery(["orders", payId, user], () =>
    fetch(urli, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(orders);
  return (
    <div>
      <button
        className="btn px-5 flex items-center ml-5 mt-5 justify-center"
        onClick={() => navigate(-1)}
      >
        <AiOutlineDoubleLeft className="mr-2 text-xl"></AiOutlineDoubleLeft>
        Back
      </button>
      <div className="payment text-white grid justify-center items-center">
        <div className="card bg-base-300 w-4/5 shadow-2xl my-12">
          <div className="card-body">
            <p className="text-success text-xl">Hello, {orders.customerName}</p>
            <h2 className="card-title text-2xl">
              Pay for: {orders.productName}
            </h2>
            <p className="text-xl">
              Please pay: <span className="text-success">${orders.price}</span>
            </p>
          </div>
        </div>
        <div className="card  max-w-md w-4/5 shadow-2xl bg-base-300">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
