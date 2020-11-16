import react from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const DayCard = ({ day, temp, icon, description, high, low, precip }) => {
  return (
    <Card>
      <CardHeader>{day}</CardHeader>
      <CardBody>
        <h2>{temp}</h2>
        <img src={`${process.env.PUBLIC_URL}/icons/${icon}.png`} />
      </CardBody>
    </Card>
  );
};

export default DayCard;
