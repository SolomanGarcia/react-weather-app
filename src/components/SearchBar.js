import React from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";

const SearchBar = ({ searchTerm, handleInputChange, handleFormSubmit }) => {
  return (
    <Form inline onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="searchTerm" hidden>
          Search by Location:
        </Label>
        <Input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Mount Rushmore OR 10014 OR Denver, CO"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Search</Button>
    </Form>
  );
};

export default SearchBar;
