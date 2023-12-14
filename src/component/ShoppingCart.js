import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItemBody from "./CartItemBody";
import formateCurrency from "./FormatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/slice/cartSlice";

const ShoppingCart = () => {
  const getCartItems = useSelector((getStore) => getStore.cartData.cartItems);

  const allFoodData = useSelector((getStore) => getStore.menuData.foodData);

  const dispatch = useDispatch();
  const isOpenState = useSelector((getStore) => getStore.cartData.isOpen);

  return (
    <Offcanvas show={isOpenState} onHide={() => dispatch(closeCart())}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>سلة المشتريات</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {getCartItems.length > 0 ? (
            getCartItems.map((item) => (
              <CartItemBody key={item.id} cartDataitem={item} />
            ))
          ) : (
            <h3>سلة المشتريات فارغه</h3>
          )}

          {/* هنا بايتم عرض اجمالي المبلغ */}

          <div className="ms-auto fw-bold fs-4">
            الاجمالي:{" "}
            {formateCurrency(
              getCartItems.reduce((totalPrice, cItem) => {
                const item = allFoodData.find((i) => i.id === cItem.id);
                return totalPrice + (item?.price || 0) * cItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
