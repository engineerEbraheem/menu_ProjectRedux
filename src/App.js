import { Container } from "react-bootstrap";
import Header from "./component/Header";
import NavBarHead from "./component/NavBarHead";
import CategoryFilter from "./component/CategoryFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodsList from "./component/FoodsList";
import { Route, Routes } from "react-router-dom";
import { getAllMenuData } from "./redux/api/apiRequest";
import ShoppingCart from "./component/ShoppingCart";

function App() {
  const dispatch = useDispatch();
  const dataLoading = useSelector((getStore) => getStore.menuData.isLoading);
  const allFoodData = useSelector((getStore) => getStore.menuData.foodData);
  const categorys = useSelector((getStore) => getStore.menuData.categoryData);
  const dataCartItems = useSelector((getStore) => getStore.cartData.cartItems);

  useEffect(() => {
    dispatch(getAllMenuData());
  }, [dispatch]);

  useEffect(() => {
    //لتخزين المنتجات المضافة للسله الى المخزن المحلي للمتصفح
    localStorage.setItem("shopping-cart", JSON.stringify(dataCartItems));
  }, [dataCartItems]);

  return (
    <div className="App">
      <ShoppingCart />
      <NavBarHead />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CategoryFilter
                  allCategoryData={categorys}
                  dataLoading={dataLoading}
                />
                <FoodsList
                  allFoodData={allFoodData}
                  dataLoading={dataLoading}
                />
              </>
            }
          />{" "}
          {/*end route 1 for home page  */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
