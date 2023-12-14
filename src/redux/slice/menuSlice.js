import { createSlice } from "@reduxjs/toolkit";
import {
  filterByCategory,
  filterBySearch,
  getAllMenuData,
} from "../api/apiRequest";

const initalValue = {
  isLoading: false,
  foodData: [],
  categoryData: [],
  error: "",
};

const menuSliceData = createSlice({
  name: "menuData",
  initialState: initalValue,

  extraReducers: (builder) => {
    // for get all data from api fetch data:..............................

    builder.addCase(getAllMenuData.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    }); //end addCase  getAllMenuData.pending
    builder.addCase(getAllMenuData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.foodData = action.payload.allData;
      state.categoryData = action.payload.categorys;
    }); //end addCase  getAllMenuData.fulfilled
    builder.addCase(getAllMenuData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("the server is rejected the error is", state.error);
    }); //end addCase  getAllMenuData.rejected

    // for filter data by category:..............................

    builder.addCase(filterByCategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    }); //end addCase  filterByCategory.pending
    builder.addCase(filterByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.foodData = action.payload;
    }); //end addCase  filterByCategory.fulfilled
    builder.addCase(filterByCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("the server is rejected the error is", state.error);
    }); //end addCase  filterByCategory.rejected

    // for filter data by Search:..............................

    builder.addCase(filterBySearch.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    }); //end addCase  filterBySearch.pending
    builder.addCase(filterBySearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.foodData = action.payload;
    }); //end addCase  filterBySearch.fulfilled
    builder.addCase(filterBySearch.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      console.log("the server is rejected the error is", state.error);
    }); //end addCase  filterBySearch.rejected
  }, //end extraReducers
}); //end menuSliceData

export default menuSliceData.reducer;
