import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Home/Login/Login";
import Signup from "./Pages/Home/Signup/Signup";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import ProtectedPage from "./Pages/Home/ProtectedPage/ProtectedPage";
import SeeDetails from "./Pages/Home/SeeDetails/SeeDetails";
import Blogs from "./Pages/Home/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import MyProfile from "./Pages/Home/MyProfile/MyProfile";
import AddReview from "./Pages/Home/AddReview/AddReview";
import MyPortfolio from "./Pages/Home/MyProtfolio/MyPortfolio";
import { ToastContainer } from "react-toastify";
import ManageAllOrders from "./Pages/Home/ManageAllOrders/ManageAllOrders";
import AddProduct from "./Pages/Home/AddProduct/AddProduct";
import ManageProducts from "./Pages/Home/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/Home/MakeAdmin/MakeAdmin";
import RequirAdmin from "./Pages/Home/RequirAdmin/RequirAdmin";
import UpdateProfile from "./Pages/Home/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/seeDetails/:id" element={<ProtectedPage><SeeDetails/></ProtectedPage>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="myOrder" element={<MyOrders />}></Route>
          <Route index element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route path="manageOrders" element={<ManageAllOrders/>}></Route>
          <Route path="addProduct" element={<RequirAdmin><AddProduct/></RequirAdmin>}></Route>
          <Route path="makeAdmin" element={<RequirAdmin><MakeAdmin/></RequirAdmin>}></Route>
          <Route path="manageProducts" element={<RequirAdmin><ManageProducts/></RequirAdmin>}></Route>
        </Route>
        <Route path="updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
