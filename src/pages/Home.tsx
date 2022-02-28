import React, { useEffect, useState } from "react";
import FoodsTable from "../components/FoodsTable";
import { getFoods } from "../services/foods.service";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then(setFoods);
  }, []);
  
  return <FoodsTable foods={foods}/>;
};

export default Home;
