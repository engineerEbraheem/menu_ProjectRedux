import { createSlice } from "@reduxjs/toolkit";
//هنا علاشان يجيب القيمه من المخزن المحلي حق المتصفح
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];
const initialValue = {
  isOpen: false,
  cartItems: initialCartItems,
  cartCounter: 0,
  error: "",
};
const shoppingCartSlice = createSlice({
  name: "cartData",
  initialState: initialValue,
  reducers: {
    increaseCartQuantity: (state, action) => {
      //هنا بانسوي دالة تتحقق هل المنتج الذي سوينا له اضافة موجود من قبل في السله او لا
      const checkExist = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (checkExist !== -1) {
        state.cartItems[checkExist].quantity += 1;
      } //end if
      else {
        state.cartItems.push({ id: action.payload, quantity: 1 });
      } // end else
    },
    decreaseCartQuantity: (state, action) => {
      const checkExist = state.cartItems.findIndex(
        (item) => item.id === action.payload && item.quantity !== 1
      );

      if (checkExist !== -1) {
        state.cartItems[checkExist].quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },

    totalQuantityInCart: (state) => {
      state.cartCounter = state.cartItems.reduce(
        (currQuantity, item) => item.quantity + currQuantity,
        0
      );
    },
  }, // end reducers
}); //end create slice
export const {
  getItemsQun,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeItemFromCart,
  openCart,
  closeCart,
  totalQuantityInCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
