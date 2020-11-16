import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import styled from "styled-components";

const gray = "rgba(0,0,0,0.125)";
const teal = "teal";
const border = `2px solid ${gray}`;
const tealBorder = `2px solid ${teal}`;

const DayWrapper = styled.article`
  text-align: center;
  :hover {
    cursor: pointer;
    .card {
      border: ${tealBorder};
    }
  }
  img {
    padding-bottom: 15px;
    width: 85px;
  }
  .card {
    border: ${border};
  }
  .card-header {
    border-bottom: ${border};
  }
  .card-body {
    padding: 20px 10px;
  }
`;

const DayCard = ({ day, temp, icon, description, high, low, precip }) => {
  return (
    <DayWrapper>
      <Card>
        <CardHeader>{day}</CardHeader>
        <CardBody>
          <h2>{temp.toFixed(1)}°</h2>
          <img
            src={`${process.env.PUBLIC_URL}/icons/${icon}.png`}
            alt={description}
          />
          <p>
            <strong>High:</strong> {high.toFixed(1)}°
          </p>
          <p>
            <strong>Low:</strong> {low.toFixed(1)}°
          </p>
          <p>
            <strong>Precip:</strong> {precip}%
          </p>
        </CardBody>
      </Card>
    </DayWrapper>
  );
};

export default DayCard;
