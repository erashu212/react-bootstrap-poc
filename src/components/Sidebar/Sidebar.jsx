import React from "react";

import { Container, Row, Nav, Col } from "react-bootstrap";
import logo from "assets/images/logo.svg";
import "./Sidebar.scss";

const Sidebar = __ => {
  return (
    <Container fluid={true}>
      <Row className="flex-xl-nowrap">
        <Col md={4} xl={3} className="ps-sidebar col-12">
          <div
            className="d-flex align-items-center ps-side-brand"
            style={{ height: "100px" }}
          >
            <img src={logo} style={{ width: "50px", height: "50px" }} alt="" />
            <span>POC</span>
          </div>
          <Nav expand={false} as="ul" className="ps-links flex-column">
            <Nav.Item as="li" className="active">
              <Nav.Link className="ps-side-link ">
                <i className="fa fa-address-card ps-side-icon" />
                Campaign Overview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="ps-side-link">
                <i className="fa fa-user ps-side-icon" />
                KPI Prediction
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="ps-side-link">
                <i className="fa fa-user ps-side-icon" />
                Historical & Future
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="ps-side-link">
                <i className="fa fa-user ps-side-icon" />
                Audience Distribution
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link className="ps-side-link">
                <i className="fa fa-android ps-side-icon" />
                Audience Predcition
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
