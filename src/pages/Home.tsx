import React, { useCallback, useEffect, useState } from "react";
import FoodDialog from "../components/FoodDialog";
import FoodsTable from "../components/FoodsTable";
import Loader from "../components/Loader";
import { addFood, getFoods } from "../services/foods.service";
import { Food } from "../types/food";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [showDialog, setShowDialog] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFoodItem, setSelectedFoodItem] = useState<Food>({
    name: "",
  } as Food);

  const fetchFoods = useCallback(async () => {
    try {
      const fetchFoods = await getFoods();
      setFoods(fetchFoods);
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const closeDialog = () => {
    setShowDialog(false);
  };

  const onSave = async (food: Food) => {
    setIsLoading(true);
    try {
      await addFood(food);
      await fetchFoods();
      closeDialog();
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
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
        onSave={onSave}
      ></FoodDialog>
    </>
  );
};

export default Home;
