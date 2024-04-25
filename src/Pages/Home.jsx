import React from "react";
import Banner from "../components/Banner";
import Experts from "../Experts";
import Newsletter from "../components/Newsletter";
import Planes from "../components/Planes";
import Login from "../components/Login";
import Grid from "../components/GridCol";
import GridRow from "../components/GridRow";
import Card from "../components/Card";
import OurServices from "../components/OurServices";
import NetflixFirstPage from "../components/NetflixFirstPage";

const Home = () => {
  return (
    <>
      <NetflixFirstPage />
      <Banner />
      <Experts />
      <Newsletter />
      <Planes />
      <Login />
      <Grid />
      <GridRow />
      <Card />
      <OurServices />
    </>
  );
};

export default Home;
