import React from "react";
import "./App.css";
import Welcome from "./Welcome";
import Toggle from "./Toggle";
import List from "./List";
import "antd/dist/antd.css";
import { Row, Col, Card, Button } from "antd";

function App() {
  return (
    <div>
      <Welcome title="Zadanie 1"></Welcome>
      <Row className="spacing">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Toggle></Toggle>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <List></List>
        </Col>
      </Row>
    </div>
  );
}

export default App;
