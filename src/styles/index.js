import styled from "styled-components";
import { Container, Form, Card } from "reactstrap";

const gray = "#ccc";
const teal = "#008080";
const outline = `2px solid ${gray}`;
const tealOutline = `2px solid ${teal}`;

export const Wrapper = styled(Container)`
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
  }
  .row {
    margin-bottom: 1rem;
    :first-child {
      align-items: center;
      margin-top: 0.75rem;
    }
    :last-child {
      margin-bottom: 2rem;
    }
  }
  .loading-spinner {
    justify-content: center;
    margin: 5rem 0;
    width: 100%;
  }
  .spinner-border {
    border-color: ${teal};
    border-right-color: transparent;
  }
`;

export const FormWrapper = styled(Form)`
  justify-content: flex-end;
  input.form-control {
    border-color: ${gray};
    border-radius: 0.25rem 0 0 0.25rem;
    border-right-width: 0;
    width: 350px;
  }
  button {
    background: ${teal};
    border-radius: 0 0.25rem 0.25rem 0;
    font-weight: 700;
  }
`;

export const DayWrapper = styled.section`
  text-align: center;
  :hover {
    cursor: pointer;
    .card {
      border-color: ${teal};
    }
  }
  h3 {
    font-weight: 700;
  }
  img {
    width: 80px;
  }
  .card {
    border: ${({ isSelected }) => (isSelected ? tealOutline : outline)};
  }
  .card-header {
    background: ${({ isSelected }) => (isSelected ? teal : null)};
    border-bottom: ${({ isSelected }) => (isSelected ? tealOutline : outline)};
    color: ${({ isSelected }) => (isSelected ? "#fff" : null)};
    font-weight: 700;
  }
  .card-body {
    padding: 1.25rem 0.75rem;
  }
`;

export const DetailsWrapper = styled(Card)`
  border: ${tealOutline};
  padding: 1.5rem;
  text-align: center;
  h2 {
    font-weight: 700;
  }
  h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }
  img {
    align-self: center;
    width: 150px;
  }
`;
