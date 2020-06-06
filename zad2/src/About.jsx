import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Button } from "antd";

import "./About.css";

const { Meta } = Card;

class About extends React.Component {
  render() {
    return (
      <Col>
        <Row justify="center" align="middle" className="aboutHeading">
          Nasze polecane gatunki
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Row>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  />
                }
              >
                <Meta title="Czerwone" />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Row>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1557410333-318777384bdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=324&q=80"
                  />
                }
              >
                <Meta title="Białe" />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Row>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1571616049941-1e19cbe3a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                  />
                }
              >
                <Meta title="Różowe" />
              </Card>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <Row>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1546567379-1af2e0d527e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                  />
                }
              >
                <Meta title="Musujące" />
              </Card>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default About;
