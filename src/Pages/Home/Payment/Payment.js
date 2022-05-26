import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Loading from "../Loading/Loading";

const stripePromise = loadStripe(
  "pk_test_51L3XvfCIuYi8Wud8APhdh9A2wFoGashWgOW4iI38BSPA2oYx97XSjhTl9QRO76Msurs4E9mNPoPCtDzZBzGxsv7q00Xsg7qcwv"
);
const Payment = () => {
  const { payId } = useParams();
  const urli = `http://localhost:5000/orders/${payId}`;
  const { data: orders, isLoading } = useQuery(["orders", payId], () =>
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
    <div className="payment text-white grid justify-center items-center">
      <div className="card bg-base-100 w-4/5 shadow-2xl my-12">
        <div className="card-body">
          <p className="text-success text-xl">Hello, {orders.customerName}</p>
          <h2 className="card-title text-2xl">Pay for: {orders.productName}</h2>
          <p className="text-xl">
            Please pay: <span className="text-success">${orders.price}</span>
          </p>
        </div>
      </div>
      <div className="card  max-w-md w-4/5 shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
