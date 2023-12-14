import React from "react";
import { Col, Row } from "react-bootstrap";
import FoodCard from "./FoodCard";

const FoodsList = ({ dataLoading, allFoodData }) => {
  return (
    <Row className="justify-content-center my-2 mt-4 rowStyle">
      <Col className="colStyle" xs={12}>
        {dataLoading ? (
          <h1 className="w-100 text-center">جاري تحميل البيانات...</h1>
        ) : allFoodData.length >= 1 ? (
          allFoodData.map((item, index) => {
            return <FoodCard key={index} menueDataItem={item} />;
          })
        ) : (
          <h1 className="text-center">لايوجد بيانات لعرضها</h1>
        )}
      </Col>
    </Row>
  );
};

export default FoodsList;
