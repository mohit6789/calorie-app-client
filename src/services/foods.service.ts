import { Food } from "../types/food";
import { get, patch, post, remove } from "./backend.service";

export const getFoods = async () => {
  const result = await get("foods/list");
  return result.data;
};

export const addFood = async (foodItem: Food) => {
  const result = await post("foods", foodItem);
  return result.data;
};

export const updateFood = async (foodItem: Food) => {
  const result = await patch("foods", foodItem);
  return result.data;
};

export const removeFood = async (foodId: number) => {
  const result = await remove(`foods/${foodId}`);
  return result.data;
};
