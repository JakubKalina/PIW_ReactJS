import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./Toggle.css";

const { Meta } = Card;

let showCard = false;

function toggleCard() {
  if (showCard === false) {
    return <p>Kliknij powyższy przycisk aby wyświetlić ciekawostkę</p>;
  } else {
    return (
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            alt="Morze Martwe"
            src="https://zalajkowane.pl/wp-content/uploads/2017/06/morze-martwe-ciekawostki.jpg"
          />
        }
      >
        <Meta
          title="Czy wiesz że ..."
          description="Morze Martwe znajduje się obecnie na poziomie 429 m n.p.m i obniża się około 1 metr na rok"
        />
      </Card>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isToggle: !this.state.isToggle });
    showCard = this.state.isToggle;
  }

  render() {
    return (
      <Row justify="center">
        <Col>
          <Row justify="center">
            <Button
              onClick={this.handleClick}
              type="primary"
              className="spacing"
              icon={<DownOutlined />}
              size={40}
            >
              Pokaż ciekawostkę
            </Button>
          </Row>
          <Row>{toggleCard()}</Row>
        </Col>
      </Row>
    );
  }
}

export default Toggle;
