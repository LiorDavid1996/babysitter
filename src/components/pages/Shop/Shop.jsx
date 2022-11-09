import "./Shop.css";
import React from "react";
import storeItem from "../../features/item.json"
import { Row ,Col, Container } from "react-bootstrap";
import {StoreItem} from "../../features/StoreItem" 


function Shop() {
  return (
    <Container>
    <div className="shop">
      <h1>Shop</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItem.map(item => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </div>
    </Container>
  );
};

export default Shop;
