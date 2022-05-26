import React from "react";
import "./AddProduct.css";
import { toast } from "react-toastify";


const AddProduct = () => {
  const handleAddPost = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const productPrice = event.target.productPrice.value;
    const minimumQuantity = event.target.minimumQuantity.value;
    const productAvailable = event.target.productAvailable.value;
    const imgUrl = event.target.imgUrl.value;
    const discription = event.target.discription.value;
    const product = {
      img: imgUrl,
      name: productName,
      discription: discription,
      price: productPrice,
      minimum: minimumQuantity,
      available: productAvailable,
    };
    console.log(product);
    const url = `https://damp-plateau-02842.herokuapp.com/product`;
    fetch(url,{
        method: "POST",
        headers:{
            'content-type' : 'application/json',
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        toast.success("Order Success");
        event.target.reset()
    })
  };
  return (
    <div className="add-product flex items-center py-5 justify-center bg-slate-600 my-8">
      <div className="card w-96 bg-slate-600 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Product</h2>
          <form onSubmit={handleAddPost}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                required
                name="productName"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                required
                name="productPrice"
                placeholder="Price"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Minimum Quantity</span>
              </label>
              <input
                type="number"
                required
                name="minimumQuantity"
                placeholder="Minimum Quantity"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Product Available</span>
              </label>
              <input
                type="number"
                required
                name="productAvailable"
                placeholder="Product Available"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                required
                name="imgUrl"
                placeholder="Image Url"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                required
                name="discription"
                placeholder="Short Description"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Add Product"
              className="btn btn-outline mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
