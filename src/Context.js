import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Create context
const create = createContext();

function Context({ children }) {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    priority: "",
  });
  
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState(""); // Filter state

  // Fetch tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if(savedTasks.length===0){
setTasks([{id:0,title:"Eating",description:"Eat daily",status:"pending",priority: "High",action:""}])
    }
    else{
      setTasks(savedTasks);
    }
   
  }, []);

  // Filter tasks based on search query
  const filteredTasks = searchQuery.length === 0
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
    const newTask = { ...formValues, createdAt: new Date().toISOString(), status: "Pending" }; // Default status
    
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
    toast.success("Task added! Go to All TAsk", { position: "top-right" });
   
    setFormValues({ title: "", description: "", priority: "" });
  };

  // Delete a task
  const deleteTaskHandler = (taskId) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
   
    setTasks(updatedTasks);
    toast.error("Task deleted !", { position: "top-right" });
    console.log('toaster workss')
   
  };

  // Update task status (toggle) red-pending,yellow-in-progress grrn-done
  const updateTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskId) {
        const newStatus =
          task.status === "Pending"
            ? "In Progress"
            : task.status === "In Progress"
            ? "Completed"
            : "Pending";
        return { ...task, status: newStatus };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
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
        updateTaskStatus,
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
