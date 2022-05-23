import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            className="btn absolute top-20 left-2 rounded drawer-button lg:hidden"
          >
            <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
          </label>

          <div className="mt-12 pt-3 lg:mt-0 px-2">
              
            <h1>welcome to our website dashboard</h1>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-slate-300 text-black">
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">Add Review</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
