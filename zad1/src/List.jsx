import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Card, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./List.css";

let countries = [
  {
    rank: 1,
    name: "Chiny",
    population: "1,394,015,977",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    link: "https://pl.wikipedia.org/wiki/Chi%C5%84ska_Republika_Ludowa",
  },
  {
    rank: 2,
    name: "Indie",
    population: "1,326,093,247",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    link: "https://pl.wikipedia.org/wiki/Indie",
  },
  {
    rank: 3,
    name: "Stany Zjednoczone",
    population: "332,639,102",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    link: "https://pl.wikipedia.org/wiki/Stany_Zjednoczone",
  },
  {
    rank: 4,
    name: "Indonezja",
    population: "267,026,366",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    link: "https://pl.wikipedia.org/wiki/Indonezja",
  },
  {
    rank: 5,
    name: "Pakistan",
    population: "233,500,636",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    link: "https://pl.wikipedia.org/wiki/Pakistan",
  },
];

const displayList = () => {
  return (
    <Row>
      {countries.map(function (country) {
        return (
          <Card
            key={country.rank}
            className="countryCard"
            title={country.rank + " " + country.name}
            extra={<a href={country.link}>Dowiedz się więcej</a>}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                Liczba ludności: {country.population}
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Row justify="center">
                  <img className="countryImage" src={country.flag}></img>
                </Row>
              </Col>
            </Row>
          </Card>
        );
      })}
    </Row>
  );
};

class List extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>Top 5 najbardziej zaludnionych krajów</Row>
          <Row>
            <Col>{displayList()}</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default List;
