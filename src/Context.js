import React, { createContext, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addTask,
  deleteTask,
  updateTaskStatus,
} from "./taskSlice"; // Import Redux actions


// Create context
const create = createContext();

function Context({ children }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks); // Access tasks from Redux store

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState(""); // Filter state

  // Filter tasks based on search query
  const filteredTasks =
    searchQuery.length === 0
      ? tasks
      : tasks.filter((task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Sort tasks based on selected filter
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (filterBy === "priority-high-to-low") {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (filterBy === "priority-low-to-high") {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (filterBy === "date-new-to-old") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (filterBy === "date-old-to-new") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0; // Default order (no sorting)
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Add new task
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formValues,
      createdAt: new Date().toISOString(),
      status: "Pending", // Default status
    };

    dispatch(addTask(newTask)); // Dispatch Redux action to add task
    toast.success("Task added! Go to All Task", { position: "top-right" });

    setFormValues({ title: "", description: "", priority: "" });
  };

  // Delete a task
  const deleteTaskHandler = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch Redux action to delete task
    toast.error("Task deleted!", { position: "top-right" });
  };

  // Update task status (toggle)
  const toggleTaskStatus = (taskId) => {
    dispatch(updateTaskStatus(taskId)); // Dispatch Redux action to update status
  };

  return (
    <create.Provider
      value={{
        handleChange,
        handleSubmit,
        formValues,
        setFormValues,
        tasks,
        deleteTaskHandler,
        toggleTaskStatus,
        searchQuery,
        setSearchQuery,
        filteredTasks: sortedTasks, // Apply sorting after filtering
        setFilterBy, // Expose filter set function
      }}
    >
      {children}
    </create.Provider>
  );
}

export const useGlobal = () => useContext(create);
export default Context;
