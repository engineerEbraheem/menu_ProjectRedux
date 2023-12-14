import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// action to get all food data and all categorys :
export const getAllMenuData = createAsyncThunk("menuData/getAll", async () => {
  const response = await axios.get("/data.json");

  const allmenuData = response.data;

  const allCategory = [
    "الكل",
    ...new Set(allmenuData.map((i) => i.category.trim())),
  ];

  const uniqueCatArrObj = allCategory.map((item) => ({ catValue: item }));

  return { allData: allmenuData, categorys: uniqueCatArrObj };
});

// action to filter food data By categorys :

export const filterByCategory = createAsyncThunk(
  "menuData/filterCat",
  async (catSelected) => {

    const response = await axios.get("/data.json");

    const allData = response.data;

    if (catSelected === "الكل") {
      return allData;
    } else {
      const filterCatData = allData.filter(
        (item) => item.category === catSelected
      );

      return filterCatData;
    }
  }
);

// action to filter food data By Search the title :
export const filterBySearch = createAsyncThunk(
  "menuData/searchTitle",
  async (word) => {
    const response = await axios.get("/data.json");

    const allData = response.data;

    if (word === "") {
      return allData;
    } else {
      const filterDataByTitle = allData.filter((item) =>
        item.title.trim().includes(word)
      );

      return filterDataByTitle;
    }
  }
);
