import React from "react";
import { useGlobal } from "../Context";
import Task from "../Components/Task"; // Import Task component
import {ToastContainer} from 'react-toastify'

function Home() {
  const { filteredTasks, deleteTaskHandler, updateTaskStatus } = useGlobal();

  return (
    <>
      <div className="container col-sm-8 mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No tasks found
                </td>
              </tr>
            ) : (
              filteredTasks.map((task, index) => (
                <Task
                  key={index}
                  task={task}
                  taskId={index} // Pass the task ID to identify it
                  deleteTaskHandler={deleteTaskHandler}
                  updateTaskStatus={updateTaskStatus}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </>
  );
}

export default Home;
