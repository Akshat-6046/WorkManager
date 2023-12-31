import Card from "react-bootstrap/Card";
import { cardList } from "./constant";
import { useState } from "react";
import Modal from "../modal";
import AddTaskForm from "../AddTaskForm";
import SearchTasks from "../SearchTasks";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

function CardComponent({ tasks, setTasks, notify }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);
  const handleClick = (key) => {

    switch (key) {
      case "add_tasks":
        setShowModal(true);
        setContent("addTaskForm");
        break;
      case "search_tasks":
        setShowModal(true);
        setContent("searchTaskForm");
        break;
      case "show_charts":
        navigate("/charts");
        break;
      case "show_tasks":
        navigate("/tasks");
        break;
      case "manage_tasks":
        navigate("/tasks");
        break;

      default:
        return;
    }
  };
  return (
    <>
      <div className="d-flex flex-wrap">
        {cardList.map((item) => {
          return (
            <Card
              key={item.key}
              style={{
                width: "32%",
                margin: "14px 8px",
                color: "#bae6cb",
                background: "rgb(3 9 15 / 54%)",
                backdropFilter: 'blur(4px)'
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-center" style={{height:'200px'}}>
                <Card.Title>{item.heading}</Card.Title>
                <Card.Text style={{ width: "80%" }}>{item.desc}</Card.Text>
                <button
                  onClick={() => handleClick(item.key)}
                  className={styles.slide}
                >
                  <div className={styles.text}>{item.heading}</div>
                </button>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {showModal ? (
        <>
          <Modal
            setShowModal={setShowModal}
            content={
              content === "addTaskForm" ? (
                <AddTaskForm
                  setTasks={setTasks}
                  setShowModal={setShowModal}
                  notify={notify}
                  isModal={true}
                />
              ) : (
                <SearchTasks tasks={tasks} setShowModal={setShowModal} />
              )
            }
          />
        </>
      ) : null}
    </>
  );
}

export default CardComponent;
