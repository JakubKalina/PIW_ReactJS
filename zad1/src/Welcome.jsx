import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card } from "antd";
import { RocketOutlined } from "@ant-design/icons";

import "./Welcome.css";

class Welcome extends React.Component {
  render() {
    return (
      <div className="WelcomeBlock">
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Card title={this.props.title} bordered={false} className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            style={{ textAlign: "center" }}
          >
            <RocketOutlined spin="true" className="welcomeIcon" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;
