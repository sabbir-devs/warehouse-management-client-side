import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ orders }) => {
  const { price, customerEmail, customerName } = orders;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (evetn) => {
    evetn.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // if(error){
    //     setCardError(error.message)
    // }else{
    //     setCardError('')
    // }
    // or
    setCardError(error?.message || "");

    setSuccess("");
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customerEmail,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your Payment is completed.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#fff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-6">{cardError}</p>}
      {success && (
        <div className="text-green-500 mt-6">
          <p>{success} </p>
          <p className="text-white">
            Your transaction Id: <span className="text-green-500 font-bold">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
