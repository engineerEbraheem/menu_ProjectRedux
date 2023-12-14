import { configureStore } from "@reduxjs/toolkit";
import menuSliceData from "./../slice/menuSlice";
import shoppingCartSlice from "./../slice/cartSlice";

export const menuStoreData = configureStore({
  reducer: {
    menuData: menuSliceData,
    cartData: shoppingCartSlice,
    devTools: true,
  },
});
