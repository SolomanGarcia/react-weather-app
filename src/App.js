import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetails from "./components/DayDetails";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    location: "",
    days: [],
    selectedDay: null,
    searchTerm: ""
  });

  const { location, days, selectedDay, searchTerm } = weatherInfo;

  useEffect(() => {
    getWeather("Denver, CO");
  }, []);

  useEffect(() => {
    document.title = `${
      location ? "Weather Info for " + location : "Find weather by location"
    }`;
  }, [location]);

  const getWeather = (location) => {
    if (!location) {
      return alert("Enter a location to get weather data!");
    }

    API.getWeather(location)
      .then((res) => {
        if (!res) return;
        setWeatherInfo({
          searchTerm: "",
          selectedDay: null,
          location: `${res.data.city_name}, ${res.data.state_code}`,
          days: res.data.data
        });
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setWeatherInfo({ ...weatherInfo, searchTerm: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getWeather(searchTerm);
  };

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>
            {location
              ? "Weather Info for " + location + ":"
              : "Search by Location:"}
          </h1>
        </Col>
        <Col md={5}>
          <SearchBar
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
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
          {selectedDay ? (
            <DayDetails
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              high={selectedDay.high_temp}
              low={selectedDay.low_temp}
              temp={selectedDay.temp}
              precip={selectedDay.pop}
              day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("lll")}
              humidity={selectedDay.rh}
              appHigh={selectedDay.app_max_temp}
              appLow={selectedDay.app_min_temp}
              windDir={selectedDay.wind_cdir_full}
              windSpd={selectedDay.wind_spd}
            />
          ) : (
            <h2> Click on a day above to get day details!</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
