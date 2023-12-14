import React from "react";
import { Button, Stack } from "react-bootstrap";

import formateCurrency from "./FormatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../redux/slice/cartSlice";

const CartItemBody = ({ cartDataitem }) => {
  //هنا جلبنا البيانات الاساسية الذي بانجيب منها المعلومات من خلال الاي دي لكل منتج اضفناه

  const allFoodData = useSelector((getStore) => getStore.menuData.foodData);

  const dispatch = useDispatch();

  const itemData = allFoodData.find((item) => item.id === cartDataitem.id);

  if (itemData == null) return null;

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center cartItemBody"
    >
      <img
        src={itemData.img}
        alt="cartImg"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {itemData.title}{" "}
          {cartDataitem.quantity > 0 && (
            <span dir="ltr" className="text-muted" style={{ fontSize: "12px" }}>
              {cartDataitem.quantity} {"  X  "}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "14px" }}>
          {formateCurrency(itemData.price)}
        </div>
      </div>
      <div className="" style={{ fontSize: "15px" }}>
        {formateCurrency(itemData.price * cartDataitem.quantity)}
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={() => dispatch(removeItemFromCart(cartDataitem.id))}
        className="removeCart"
      >
        <i className="fa-solid fa-trash-alt"></i>
        {/* هذة تسوي علامة اكس */}
        {/* &times; */}
      </Button>
    </Stack>
  );
};

export default CartItemBody;
