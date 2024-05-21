import { setProductsFromLocalStorage } from "./slice";

export const loadCartItemsFromLocalStorage = () => (dispatch) => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch(setProductsFromLocalStorage(items));
};