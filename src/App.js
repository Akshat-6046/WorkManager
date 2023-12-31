/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CardComponent from "./components/CardComponent";
import ListComponent from "./components/ListComponent";
import Charts from "./components/Charts";
import { ToastContainer, toast } from "react-toastify";
import './App.css'
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  
  const notify = (msg = 'Success!') =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 1500,
      limit:'2',
      hideProgressBar: true,
      theme: "light",
    });
  
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const localStorageRaw = localStorage.getItem('tasks');
    let localStorageParsed = [];
    if(!!localStorageRaw){
      localStorageParsed = JSON.parse(localStorageRaw);
    }

      if (localStorageParsed?.length>0) {
        setTasks(localStorageParsed);
       }
  },[]);

  useEffect(()=>{
    if((tasks||[])?.length>0){
      localStorage.setItem('tasks', JSON?.stringify(tasks));
    }
  },[tasks]);

  return (
    <div className='mainApp'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <CardComponent
                tasks={tasks}
                setTasks={setTasks}
                notify={notify}
              />
            }
          />
          <Route
            path="/home"
            element={
              <CardComponent
                tasks={tasks}
                setTasks={setTasks}
                notify={notify}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <ListComponent
                tasks={tasks}
                setTasks={setTasks}
                notify={notify}
              />
            }
          />
          <Route path="/charts" element={<Charts tasks={tasks} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
