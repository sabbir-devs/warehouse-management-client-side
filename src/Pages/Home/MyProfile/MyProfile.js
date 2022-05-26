import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import "./MyProfile.css";
import noProfilePic from "../../../asets/no-profile-pic.jpg";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: users,
    isLoading,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        email: user?.email
      },
    }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-profile grid items-center">
      <div className="avater grid justify-items-center mt-8 mb-[30px]">
        <div className="w-44 rounded-full">
          <img className="rounded-full" src={user?.photoURL || noProfilePic} alt="" />
        </div>
      </div>
      <div className="flex bg-base-100 h-[50hv]">
        <div className="flex-auto w-2/5 text-center lg:mt-20 text-white-300">
          <p>Name: <span className="text-green-500 text-xl">{user?.displayName}</span></p>
          <p>Email: <span className="text-green-500 text-xl">{user?.email}</span></p>
          {users?.address &&<p>Address: <span className="text-green-500 text-xl">{users?.address}</span></p>}
          {users?.phone && <p>Phone Number: <span className="text-green-500 text-xl">{users?.phone}</span></p>}
          {users?.social && <p>Social Link: <span className="text-green-500 text-xl">{users?.social}</span></p>}
        </div>
        <div className="flex-auto text-center items center lg:mt-20 w-2/5">
          <button className="btn btn-sm">
            <Link to="/updateprofile">Update Your Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
