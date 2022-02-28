export default {
  setItem: (key: string, data: Object | string) => {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  },
  getItem: (key: string) => {
    let item: string = localStorage.getItem(key) || "";
    try {
      item = JSON.parse(item);
    } catch (e) {
      return item;
    }
    return item;
  },
  deleteAllCookies: () => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
};
