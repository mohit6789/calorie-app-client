import { USER_KEY } from "../contants";
import storageService from "../services/storage.service";
import { User } from "../types/user";

export const getLoggedinUser = (): User => {
  return storageService.getItem(USER_KEY) as any;
}

export const isAdmin = () => {
  let user = getLoggedinUser();
  return user.role === 'admin';
}