import React, { useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { filterBySearch } from "../redux/api/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { openCart, totalQuantityInCart } from "../redux/slice/cartSlice";

const NavBarHead = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const dispatch = useDispatch();

  const onSearchAction = () => {
    dispatch(filterBySearch(searchFieldValue.trim()));
    setSearchFieldValue("");
  };

  //هذة الدالة لجلب عدد المنتجات الموجوده في السله لعرضها في الايقونه
  const getCartCounter = useSelector(
    (getStore) => getStore.cartData.cartCounter
  );
  //استدعيناها علاشان في كل مره تتحدث القيمه يستدعي لي دالة عد المنتجات
  const getCartItems = useSelector((getStore) => getStore.cartData.cartItems);

  //استدعاء دالة عد المنتجات التي في السله
  useEffect(() => {
    dispatch(totalQuantityInCart());
  }, [dispatch, getCartItems]);

  return (
    <Navbar
      sticky="top"
      className="mb-4 shadow-sm"
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#">
          <img src="images/restaurantLogo8.png" className="navLogo" alt="" />
        </Navbar.Brand>
        {/* هنا جلبنا الدالة التي تقوم بفتح السله عند الضغط على ايقونة السله */}
        <Button
          variant="outline-warning"
          className="cartLinkBtn rounded-circle ms-auto me-2 "
          onClick={() => dispatch(openCart())}
        >
          <i className="fa-solid fa-shopping-cart"></i>
          <div className="cartCount rounded-circle bg-danger d-flex justify-content-center align-items-center">
            {getCartCounter}
          </div>
        </Button>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 justify-content-between"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              الرئيسية
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="بحث"
              className="mx-2"
              aria-label="Search"
              onChange={(el) => setSearchFieldValue(el.target.value)}
              value={searchFieldValue}
            />
            <Button onClick={onSearchAction} variant="outline-light">
              ابحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarHead;
