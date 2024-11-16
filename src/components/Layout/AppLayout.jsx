import { Outlet } from "react-router";
import FooterData from "../Footer/Footer.js";
import Footer from "../Footer/Footer.jsx";
import footerNavData from "../FooterNav/FooterNav.js";
import FooterNav from "../FooterNav/FooterNav.jsx";
import Header from "../Header/Header.jsx";
import HeaderData from "../Header/HeaderData.js";

const AppLayout = () => {
  return (
    <div>
      <Header NavbarData={HeaderData}/>
      <Outlet/>
      <Footer FData={FooterData}/>
      <FooterNav footericonData={footerNavData}/>
    </div>
  )
}
export default AppLayout;
