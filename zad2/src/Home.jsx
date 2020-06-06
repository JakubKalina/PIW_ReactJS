import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Button, Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./Home.css";

const { Header, Content, Footer } = Layout;

class Home extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row>
            <img
              className="landingImage"
              src={require("./images/landing.jpg")}
            />
          </Row>
          <Row>
            <img className="landingImage" src={require("./images/field.jpg")} />
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row>
            <p className="langingHeading">
              Odkryj nasze wina z najdalszych zakątków świata
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Home;
