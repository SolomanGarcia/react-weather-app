import React from "react";
import { Container, Row, Col } from "reactstrap";
import sampleData from './data/sample.json'

function App() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for [city, state]</h1>
        </Col>
        <Col md={5}>
          <h2>Search bar goes here</h2>
        </Col>
      </Row>
      <Row></Row>
    </Container>


export default App;
