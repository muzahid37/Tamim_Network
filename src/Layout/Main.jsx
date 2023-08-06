import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheared/Footer/Footer";
import Navbar from "../Pages/Sheared/Navbar/Navbar";
// import TopNav from "../Pages/Sheared/Navbar/topNav";

const Main = () => {
  return (
    <div>
      {/* <TopNav></TopNav> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
