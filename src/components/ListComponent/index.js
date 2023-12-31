import React from "react";
import ListTask from "../ListTask";
import AddTaskForm from "../AddTaskForm";
const ListComponent = (props) => {
  return (
    <div className="d-flex">
      <div
        className="d-flex w-75 p-3 m-3"
        style={{
          background: "rgb(3 9 15 / 54%)",
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
          height: "85vh",
          overflow: "scroll",
        }}
      >
        <ListTask {...props} />
      </div>
      <div
        className="px-5 py-3 my-3 me-3 rounded h-75"
        style={{
          background: "rgb(210 215 219 / 73%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <AddTaskForm {...props} />
      </div>
    </div>
  );
};

export default ListComponent;
