import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { AiOutlineDoubleLeft } from 'react-icons/ai';

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const updateInformation = {
      education: event.target.education.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      social: event.target.social.value,
    };
    console.log(updateInformation);
    fetch(`https://damp-plateau-02842.herokuapp.com/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updateInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Profile Updated");
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-slate-900 py-5">
      <button className="btn px-5 flex bg-slate-900 items-center ml-5 mt-5 justify-center " onClick={() => navigate(-1)}>
          <AiOutlineDoubleLeft className="mr-2 text-xl"></AiOutlineDoubleLeft>
        Back to My Profile
      </button>
      <div className="update-porfile grid items-center justify-center my-8">
        <div className="card w-96shadow-2xl bg-slate-900 grid items-center p-4 ">
          <h1 className="text-xl my-4">UPDATE YOUR PROFILE</h1>
          <form
            onSubmit={handleUpdateProfile}
            className="grid grid-cols-1 gap-2"
          >
            <input
              type="text"
              name="education"
              placeholder="Education"
              className="input input-bordered w-full "
              required
              id=""
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full"
              required
              id=""
            />
            <input
              type="number"
              name="phone"
              placeholder="Number"
              className="input input-bordered w-full "
              required
              id=""
            />
            <input
              type="text"
              name="social"
              placeholder="Social Link"
              className="input input-bordered w-full "
              required
              id=""
            />
            <input
              type="submit"
              value="UPDATE PROFILE"
              className="input input-bordered w-full "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
