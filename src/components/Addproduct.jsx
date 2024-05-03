import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const navigate = useNavigate();
  const [show, setshow] = useState("");
  const [data, setdata] = useState("");
  const addHandler = async (e) => {
    try {
      e.preventDefault();
      const da = { email: data };
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        da
      );
      setshow(res);
      console.log(res);
      if (res.status === 201) {
        navigate("/get/products");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Addproduct</div>
      <form onSubmit={addHandler}>
        <input
          value={data}
          onChange={(e) => setdata(e.target.value)}
          type="text"
          placeholder="email"
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Addproduct;
