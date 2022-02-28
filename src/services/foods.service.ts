import { get } from "./backend.service";

export const getFoods = async () => {
  const result = await get("foods/list");
  return result.data;
};
