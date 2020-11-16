import react from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const DayCard = ({ day, temp, icon, description, high, low, precip }) => {
  return (
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
  );
};

export default DayCard;
