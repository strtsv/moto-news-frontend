import React from "react";

import Header from "../components/Header";

import PopularReviews from "../components/Home/PopularReviews";
import News from "../components/Home/News";
import Newsletter from "../components/Home/Newsletter";
import LatestReviews from "../components/Home/LatestReviews";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <PopularReviews />
      <News />
      <Newsletter />
      <LatestReviews />
      <Footer />
    </div>
  );
};

export default Home;
