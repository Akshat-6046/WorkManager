import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListTask from "../ListTask";

const SearchTasks = ({ tasks, setShowModal = () => {} }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e, type) => {
    setError("");
    setShow(false);
    if (type === "date") setDate(e.target.value);
    else setName(e.target.value);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (!name && !date) {
      setError("Enter Name or Date");
      return;
    }
    setShow(true);
  };

  const handleReset = () => {
    setName("");
    setDate("");
    setError("");
    setShow(false);
  };

  const updatedTasks = tasks.filter((task) => {
    return (
      (date && task?.date === date) ||
      (name && task?.name?.toLowerCase().includes(name?.toLowerCase()))
    );
  });

  return (
    <>
      <h3 className="d-flex justify-content-between">
        <div className="w-100 d-flex justify-content-center">
          Search Your Task
        </div>
        <div
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            fontSize: "14px",
            cursor: "pointer",
            boxShadow: "0px 0px 2px 0px #000",
            background: "rgb(231 19 19)",
          }}
          className="d-flex justify-content-center text-white align-items-center"
          onClick={() => setShowModal(false)}
        >
          x
        </div>
      </h3>
      <Form
        noValidate
        className="d-flex justify-content-between"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3 w-25" controlId="name">
          <Form.Label>Search by Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => handleChange(e, "name")}
            value={name}
            placeholder="Example text"
            aria-describedby="inputGroupPrepend"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-25" controlId="date">
          <Form.Label>Search By Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={(e) => handleChange(e, "date")}
            value={date}
            aria-describedby="inputGroupPrepend"
            required
          />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-end mb-3">
          <Button
            type="submit"
            variant="success"
            className="px-5 me-3"
            style={{ height: "40px" }}
          >
            Search
          </Button>
          <Button
            variant="secondary"
            style={{ height: "40px" }}
            onClick={handleReset}
            className="px-3 me-3"
          >
            Reset
          </Button>
        </div>
      </Form>
      {error ? <div className="text-danger">{error} !</div> : null}
      {show ? <ListTask tasks={updatedTasks} showButtons={false} /> : null}
    </>
  );
};

export default SearchTasks;
