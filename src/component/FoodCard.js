import React from "react";
import { Button, Card } from "react-bootstrap";
import formateCurrency from "./FormatCurrency";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../redux/slice/cartSlice";

const FoodCard = ({ menueDataItem }) => {
  const getItemsQuantity = useSelector(
    (getStore) => getStore.cartData.cartItems
  );
  //هذة الدالة علاشان تجيب لي الكمية من هذة المنتج الموجود في السله علاشان نفعل زر الزيادة او النقصان اذا كان العدد واحد
  //اما اذا كان المنتج مش موجود بالسله فظهر زر اضافة الى السلة
  const checkQuantity =
    getItemsQuantity.find((item) => item.id === menueDataItem.id)?.quantity ||
    0;

  const dispatch = useDispatch();

  return (
    <Card className="cardDiv d-flex flex-row my-3">
      <Card.Img className="w-25" src={menueDataItem.img} />
      <Card.Body className="cardBody">
        <Card.Title className="d-flex justify-content-between titleDiv mb-0">
          <div className="itemTitle">{menueDataItem.title}</div>
          <div className="itemPrice">
            {formateCurrency(menueDataItem.price)}
          </div>
        </Card.Title>
        <Card.Text className="py-2 mb-0 item-description">
          {menueDataItem.description}
        </Card.Text>
        <div className="addCartDiv d-flex justify-content-end align-items-center">
          {checkQuantity === 0 ? (
            <button
              onClick={() => dispatch(increaseCartQuantity(menueDataItem.id))}
              className="addCartBtn rounded-circle "
            >
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          ) : (
            <div className="quantity d-flex justify-content-center align-items-center">
              <span className="quntityTitle">الكمية</span>
              <div className="input-group quantityInput mx-3 ">
                <Button
                  onClick={() =>
                    dispatch(decreaseCartQuantity(menueDataItem.id))
                  }
                  variant="outline-success"
                >
                  <i className="fa-solid  fa-minus-circle"></i>
                </Button>

                <input
                  readOnly
                  value={checkQuantity}
                  min={1}
                  type="number"
                  className="form-control text-center"
                />

                <Button
                  onClick={() =>
                    dispatch(increaseCartQuantity(menueDataItem.id))
                  }
                  variant="outline-success"
                >
                  <i className="fa-solid  fa-plus-circle"></i>
                </Button>
              </div>

              <Button
                variant="outline-danger"
                size="xs"
                onClick={() => dispatch(removeItemFromCart(menueDataItem.id))}
              >
                <i className="fa-solid  fa-trash-alt"></i>
                {/* هذة تسوي علامة اكس */}
                {/* &times; */}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
