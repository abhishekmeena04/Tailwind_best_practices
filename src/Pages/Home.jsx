import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Experts from "../Experts";
import Newsletter from "../components/Newsletter";
import Planes from "../components/Planes";
import Grid from "../components/GridCol";
import GridRow from "../components/GridRow";
import Card from "../components/Card";
import OurServices from "../components/OurServices";
import NetflixFirstPage from "../components/NetflixFirstPage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      url: "https://www.gstatic.com/youtube/img/promos/growth/6b02bc7679cae7d84e51e52f4a11c3cf511f8e86ebc4c924bce6cb8d74d9de10_244x112.webp",
      name: "youtube",
      category: "watches",
      seller: "Watch LTD",
      price: 2000,
    },
  ]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        logout
      </button>
      <h1>product list</h1>
      {data.map((item, index) => {
        return (
          <div key={index} className="border border-black">
            <img src={item.url} alt="" />
            <p> {item.name}</p>
            <p> {item.category}</p>
            <p>{item.seller}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      <NetflixFirstPage />
      <Banner />
      <Experts />
      <Newsletter />
      <Planes />
      <Grid />
      <GridRow />
      <Card />
      <OurServices />
    </>
  );
};

export default Home;
