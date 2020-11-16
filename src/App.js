import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    // location: "",
    // days: [],
    location: "Denver, CO",
    days: sampleData.data,
    selectedDay: {},
    searchTerm: ""
  });

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for [city, state]</h1>
        </Col>
        <Col md={5}>
          <h2>
            <SearchBar />
          </h2>
        </Col>
      </Row>
      <Row>
        {sampleData.data.map((day) => (
          <Col>
            <DayCard />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <DayDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
