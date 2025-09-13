import React from "react";
import Header from "../../Commponents/Header/Header";
import Footer from "../../Commponents/Footer/Footer";
import Banner from "../../Commponents/Banner/Banner";
import RowList from "../../Commponents/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;
