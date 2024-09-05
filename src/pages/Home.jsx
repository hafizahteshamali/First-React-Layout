import Header from "../components/Header/Header.jsx";
import Banner from "../components/Common/Banner/Banner.jsx";
import {BannerData1, BannerData2, BannerData3, BannerData4 } from "../components/Common/Banner/Banner.js";
import Card from "../components/Common/Card/Card.jsx";
import CardData from "../components/Common/Card/Card.js";


function Home() {
  return (
      <>
      <Header />
      <Banner Bdata1={BannerData1}/>
      <Banner isrotate Bdata1={BannerData2}/>
      <Banner Bdata1={BannerData3}/>
      <Card Data={CardData}/>
      <Banner isrotate isBackground Bdata1={BannerData4}/>
      </>
  )
}

export default Home