import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "../modal";
import EditTaskModal from "../EditTaskForm";
import { TailSpin as Loader } from "react-loader-spinner";
const ListTask = ({
  tasks,
  setTasks = () => {},
  showButtons = true,
  notify = () => {},
  loading = false,
}) => {
  const [selectedTask, setSelectedtask] = useState(null);
  const setShowModal = (index) => {
    setSelectedtask(index);
  };

  const deleteTask = (index) => {
    if (tasks.length === 1) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      return newTasks;
    });
    notify("Task Deleted Successfully!");
  };
  if (tasks?.length === 0 && !loading)
    return <h3 className="fw-bold text-danger">No Tasks Found !</h3>;
  return (
    <div
      style={{
        height: showButtons ? "auto" : "40vh",
        width: "100%",
        overflow: "scroll",
      }}
    >
      <h4 className="fw-bold d-flex pt-3 justify-content-center text-white">
        List of Tasks
      </h4>
      {loading ? (
        <Loader
          visible={true}
          height="100"
          width="100"
          color="#e9e9e9"
          ariaLabel="tail-spin-loading"
          radius="2"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <ListGroup as="ol" numbered className="overflow-scroll">
          {tasks.map((task, i) => {
            return (
              <ListGroup className="m-2" key={`${i} ${task?.name}`}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    boxShadow: "0px 0px 4px 0px #fff",
                    background: "#050404bd",
                  }}
                >
                  <div
                    className="ms-2 me-auto w-75 text-white"
                    style={{ wordWrap: "break-word" }}
                  >
                    <div className="d-flex">
                      <div className="fw-bold text-white">{task?.name}</div>
                    </div>
                    {task?.desc}
                    <div className="fw-bold text-white">Due: {task?.date}</div>
                  </div>
                  {showButtons ? (
                    <div className="d-flex h-auto justify-content-center align-items-center">
                      <Button
                        type="submit"
                        onClick={() => setShowModal(i)}
                        variant="warning"
                        className="px-4 me-3"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteTask(i)}
                        className="px-3 me-3"
                      >
                        Delete
                      </Button>
                    </div>
                  ) : null}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </ListGroup>
      )}
      {selectedTask !== null ? (
        <>
          <Modal
            setShowModal={setShowModal}
            content={
              selectedTask !== null ? (
                <EditTaskModal
                  tasks={tasks}
                  selectedTask={selectedTask}
                  setTasks={setTasks}
                  setShowModal={setShowModal}
                  notify={notify}
                />
              ) : null
            }
          />
        </>
      ) : null}
    </div>
  );
};

export default ListTask;
