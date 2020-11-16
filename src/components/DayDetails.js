import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";

const DetailsWrapper = styled(Card)`
  margin: 15px 0;
  border: 2px solid teal;
  text-align: center;
`;

const DayDetails = ({
  appHigh,
  appLow,
  day,
  description,
  high,
  humidity,
  icon,
  low,
  precip,
  temp,
  windDir,
  windSpd
}) => {
  return (
    <DetailsWrapper>
      <CardBody>
        <h2>Day Details for {day}:</h2>
        <h3>{temp.toFixed(1)}°</h3>
        <img
          src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
          alt={description}
        />
        <p>
          <em>{description}</em>
        </p>
        <p>
          <strong>High:</strong> {high.toFixed(1)}° |{" "}
          <strong>Feels Like:</strong> {appHigh.toFixed(1)}°
        </p>
        <p>
          <strong>Low:</strong> {low.toFixed(1)}° | <strong>Feels Like:</strong>{" "}
          {appLow.toFixed(1)}°
        </p>
        <p>
          <strong>Likelihood of Precipitation:</strong> {precip}% |{" "}
          <strong>Relative Humidity:</strong> {humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {(windSpd * 2.237).toFixed(2)}mph |{" "}
          <strong>Wind Direction:</strong>{" "}
          {windDir[0].toUpperCase() + windDir.substring(1)}
        </p>
      </CardBody>
    </DetailsWrapper>
  );
};

export default DayDetails;
