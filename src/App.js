import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
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

  const { location, days, selectedDay, searchTerm } = weatherInfo;

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather for {location}</h1>
        </Col>
        <Col md={5}>
          <h2>
            <SearchBar />
          </h2>
        </Col>
      </Row>
      <Row>
        {days.map((day) => (
          <Col key={day.valid_date}>
            <DayCard
              icon={day.weather.icon}
              description={day.weather.description}
              high={day.high_temp}
              low={day.low_temp}
              temp={day.temp}
              precip={day.pop}
              day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
              setSelectedDay={() =>
                setWeatherInfo({ ...weatherInfo, selectedDay: day })
              }
              isActive={day === selectedDay}
            />
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
