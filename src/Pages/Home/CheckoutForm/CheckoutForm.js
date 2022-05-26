import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CheckoutForm = ({ orders }) => {
  const { _id, price, customerEmail, customerName } = orders;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [procesing, setProcesing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://damp-plateau-02842.herokuapp.com/create-payment-intent", {
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
    setProcesing(true);

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
      setProcesing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! Your Payment is completed.");
        toast.success('Payment Successfull')
      // update order paid
      const payment = {
          order: _id,
          transactionId: paymentIntent.id,

      }
      fetch(`https://damp-plateau-02842.herokuapp.com/orders/${_id}`,{
          method:'PATCH',
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payment),

      })
        .then((res) => res.json())
        .then((data) => {
          setProcesing(false);
          console.log(data);
        });
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
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-6">{cardError}</p>}
      {success && (
        <div className="text-green-500 mt-6">
          <p>{success} </p>
          <p className="text-white">
            Your transaction Id:{" "}
            <span className="text-green-500 font-bold">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
