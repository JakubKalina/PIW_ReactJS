import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col, Card, Button, Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/">Strona domowa</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">O nas</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">Kontakt</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Programowanie Interfejsów Webowych ©2020 Jakub Kalina
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
