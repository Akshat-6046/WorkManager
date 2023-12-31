import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditTaskForm = ({
  selectedTask,
  tasks,
  setTasks = () => {},
  setShowModal = () => {},
  notify = () => {},
}) => {
  const [state, setState] = useState(tasks[Number(selectedTask)]);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    setValidated(false);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(selectedTask, 1, state);
      return newTasks;
    });
    setValidated(true);
    notify("Suadsjvnkasldn asdjvnkasd");
    setShowModal(null);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h3 className="d-flex justify-content-center">EDIT TASK</h3>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) =>
            setState((prev) => ({ ...prev, name: e.target.value }))
          }
          value={state?.name}
          placeholder="Example text"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Task cannot be empty!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) =>
            setState((prev) => ({ ...prev, desc: e.target.value }))
          }
          value={state?.desc}
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Enter description
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 w-25" controlId="date">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Date"
          onChange={(e) =>
            setState((prev) => ({ ...prev, date: e.target.value }))
          }
          value={state?.date}
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
          Date is required
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-center pt-4 pb-3">
        <Button type="submit" variant="success" className="px-5 me-3">
          Save
        </Button>
        <Button
          variant="secondary"
          onClick={() => setShowModal(false)}
          className="px-3 me-3"
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default EditTaskForm;
