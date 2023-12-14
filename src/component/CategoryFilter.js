import React, { useState } from "react";
import { Col, Row, ToggleButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/api/apiRequest";
const CategoryFilter = ({ allCategoryData, dataLoading }) => {
  const initialState = "الكل";

  const dispatch = useDispatch();
  //هنا هذة المخزن علاشان يخزن حالة او الزرار الذي ضغطنا عليه يعني باتخزن ايضا قيمته

  const [radioValue, setRadioValue] = useState(initialState);

  const onFilterSelect = (e) => {
    setRadioValue(e.currentTarget.value);

    // هنا تسوي لي فلترة للبيانات عند الضغط على احد الاصناف

    dispatch(filterByCategory(e.currentTarget.value));
  };
  return (
    <Row className="justify-content-center my-2 rowStyle">
      <Col className="text-center colStyle" xs={10}>
        <div className="filterBtnDiv ">
          {dataLoading ? (
            <h1 className="w-100 text-center">جاري تحميل التصنيفات...</h1>
          ) : allCategoryData.length >= 1 ? (
            allCategoryData.map((item, index) => (
              <ToggleButton
                key={index}
                id={`btnCat-${index}`}
                type="radio"
                variant="outline-danger"
                name="btnCat"
                value={item.catValue}
                checked={radioValue === item.catValue}
                onChange={onFilterSelect}
                className="m-2  px-4 btnCat"
              >
                {item.catValue}
              </ToggleButton>
            )) // end allCategoryData.map
          ) : (
            <h1 className="text-center">لايوجد تصنيفات</h1>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default CategoryFilter;
