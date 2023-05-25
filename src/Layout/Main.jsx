import { Outlet } from "react-router-dom";
import Footer from "../SharedPage/Footer";
import NavBar from "../SharedPage/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
