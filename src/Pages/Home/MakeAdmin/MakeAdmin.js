import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const { data: users, isLoading } = useQuery("user", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="make-admin">
      <h1>make Admin {users?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td><button className="btn btn-outline btn-sm ">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
