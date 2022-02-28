import React, { useEffect, useState } from "react";
import FoodDialog from "../components/FoodDialog";
import FoodsTable from "../components/FoodsTable";
import Loader from "../components/Loader";
import { getFoods } from "../services/foods.service";
import { Food } from "../types/food";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [showDialog, setShowDialog] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFoodItem, setSelectedFoodItem] = useState<Food>({
    name: "",
  } as Food);

  useEffect(() => {
    getFoods()
      .then(setFoods)
      .finally(() => setIsLoading(false));
  }, []);

  const closeDialog = () => {
    setShowDialog(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <FoodsTable foods={foods} />
      <FoodDialog
        isOpen={showDialog}
        closeDialog={closeDialog}
        selectedFoodItem={selectedFoodItem}
      ></FoodDialog>
    </>
  );
};

export default Home;
