import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useAdmin from "../../../hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="dashboard">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn absolute top-20 left-2 rounded drawer-button lg:hidden"
          >
            <GiHamburgerMenu className="text-xl"></GiHamburgerMenu>
          </label>

          <div className="mt-12 pt-3 lg:mt-0 bg-slate-600 px-2">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-slate-300 text-black">
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard/myOrder">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">Add Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>

            {admin && (
              <>
                <li>
                  <Link to="/dashboard/manageOrders">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
