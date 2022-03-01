import { Box, Button } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import FoodDialog from "../components/FoodDialog";
import FoodsTable from "../components/FoodsTable";
import Loader from "../components/Loader";
import {
  addFood,
  getFoods,
  removeFood,
  updateFood,
} from "../services/foods.service";
import { Food } from "../types/food";

const Home = () => {
  const defaultFoodItem: Food = {
    name: "",
    calories: 0,
    price: 0,
  } as Food;

  const [foods, setFoods] = useState<Food[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFoodItem, setSelectedFoodItem] =
    useState<Food>(defaultFoodItem);

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
    setSelectedFoodItem(defaultFoodItem);
    setShowDialog(false);
  };

  const onSave = async (food: Food) => {
    setIsLoading(true);
    console.log(food);
    try {
      if (food.id) {
        await updateFood(food);
      } else {
        await addFood(food);
      }
      await fetchFoods();
      closeDialog();
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  const showEditDialog = (food: Food) => {
    console.log(food);
    setShowDialog(true);
    setSelectedFoodItem(food);
  };

  const onDeleteClicked = async (foodId: number) => {
    setIsLoading(true);
    try {
      await removeFood(foodId);
      
      setFoods((foodList) => {
        return foodList.filter(f => f.id !== foodId);
      });
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Box display="flex" justifyContent="right" mb={2}>
        <Button variant="contained" onClick={() => setShowDialog(true)}>
          Add Food
        </Button>
      </Box>
      <FoodsTable
        foods={foods}
        showEditDialog={showEditDialog}
        removeFood={onDeleteClicked}
      />
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
