import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import icons

function Task({ task, taskId, deleteTaskHandler, updateTaskStatus }) {
  const { title, description, priority, status } = task;

  return (
    <tr>
      
      <td>{taskId+1}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        {status === "Pending" ? (
          <FaTimesCircle
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => updateTaskStatus(taskId)} // Toggle status
          />
        ) : status === "In Progress" ? (
          <FaTimesCircle
            style={{ color: "orange", cursor: "pointer" }}
            onClick={() => updateTaskStatus(taskId)} // Toggle status
          />
        ) : (
          <FaCheckCircle
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => updateTaskStatus(taskId)} // Toggle status
          />
        )}
      </td>
      <td>{priority}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteTaskHandler(taskId)} // Trigger delete from context
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Task;