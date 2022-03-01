const setItem = (key: string, data: Object | string) => {
  if (typeof data === "object") {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.setItem(key, data);
  }
};
const getItem = (key: string) => {
  let item: string = localStorage.getItem(key) || "";
  try {
    item = JSON.parse(item);
  } catch (e) {
    return item;
  }
  return item;
};

export default {
  getItem,
  setItem
};
