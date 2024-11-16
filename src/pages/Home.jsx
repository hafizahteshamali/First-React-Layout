// import Header from "../components/Header/Header.jsx";
import Banner from "../components/Common/Banner/Banner.jsx";
import {BannerData1, BannerData2, BannerData3, BannerData4 } from "../components/Common/Banner/Banner.js";
import Card from "../components/Common/Card/Card.jsx";
import CardData from "../components/Common/Card/Card.js";
import PreFooter from "../components/PreFooter/PreFooter.jsx";
import NewsletterData from "../components/PreFooter/PreFooter.js";
import AppLayout from "../components/Layout/AppLayout.jsx";
// import Footer from "../components/Footer/Footer.jsx";
// import FooterData from "../components/Footer/Footer.js";
// import FooterNav from "../components/FooterNav/FooterNav.jsx";
// import footerNavData from "../components/FooterNav/FooterNav.js";


function Home() {
  return (
      <>
      <Banner Bdata1={BannerData1}/>
      <Banner isrotate Bdata1={BannerData2}/>
      <Banner Bdata1={BannerData3}/>
      <Card Data={CardData}/>
      <Banner isrotate isBackground Bdata1={BannerData4}/>
      <PreFooter data={NewsletterData}/>
      </>
  )
}

export default Home