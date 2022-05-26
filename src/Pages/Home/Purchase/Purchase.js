import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Purchase = ({ orderQuantity, detailProduct, setCloseModal }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleModal = (event) => {
    event.preventDefault();
    const price = event.target.price.value;
    const address = event.target.address.value;
    const number = event.target.number.value;

    const orderDetail = {
      productName: detailProduct?.name,
      customerName: user?.displayName,
      customerEmail: user?.email,
      orderQuantity,
      price: price,
      address: address,
      phone: number,
    };

    const url = `http://localhost:5000/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization : `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(orderDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Order Success");
        setCloseModal(null)
      });
  };

  return (
    <div className="purchase">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action absolute top-0 right-0 mb-4">
            <label htmlFor="my-modal-6" className="btn btn-outline mr-2 px-5">
              X
            </label>
          </div>
          <form onSubmit={handleModal}>
            <h1 className="w-10/12" title={detailProduct?.name}>{detailProduct?.name}</h1>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                value={orderQuantity}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Total Price</span>
              </label>
              <input
                type="email"
                name="price"
                value={orderQuantity * detailProduct?.price}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                required
              />
            </div>
            <input
              type="submit"
              value="Place Order"
              className="w-full btn btn-outline mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
