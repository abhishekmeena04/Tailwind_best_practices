import axios from "axios";
import React, { useEffect, useState } from "react";

const GetProducts = () => {
  const [first, setfirst] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setfirst(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      products :
      {first.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default GetProducts;
