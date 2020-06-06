import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Button, Input } from "antd";

import { UserOutlined, MailOutlined } from "@ant-design/icons";

import "./Contact.css";

const { TextArea } = Input;

class Contact extends React.Component {
  render() {
    return (
      <Row justify="center" align="middle">
        <Col>
          <Row className="contactHeading">Bądźmy w kontakcie</Row>
          {/* Imię i nazwisko */}
          <Row className="inputSpacing">
            <Input
              size="large"
              placeholder="Imię i nazwisko"
              prefix={<UserOutlined />}
            />
          </Row>
          {/* Adres email */}
          <Row className="inputSpacing">
            <Input
              size="large"
              placeholder="Adres email"
              prefix={<MailOutlined />}
            />
          </Row>
          {/* Treść wiadomości */}
          <Row className="inputSpacing">
            <TextArea rows={4} />
          </Row>
          <Row className="inputSpacing" align="middle" justify="center">
            <Button className="submitButton" type="primary">
              Wyślij
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Contact;
