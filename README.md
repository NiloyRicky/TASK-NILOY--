

Task Manager App - Persisting tasks in local storage

This application is a Task Manager built using React for managing the UI and local storage for persisting task data. The app allows users to perform various actions such as adding, deleting, and updating tasks, with the task data being persistently stored in local storage.

How to Run the Application

1. Clone the repository



Start by cloning the project to your local machine. Open a terminal window and run the following command:

git clone https://github.com/your-repository-name/task-manager-localstorage.git

2. Install dependencies



After cloning the repository, navigate to the project folder:

cd task-manager

Install all necessary dependencies by running:

npm install

3. Run the Application



Once the dependencies are installed, you can start the application by running:

npm start

The application will be running at http://localhost:3000.


---

Core Functions and Features

1. Add Task



The application allows the user to add new tasks. When a user submits the task form, a new task with attributes like title, description, and priority is added to local storage. Each task is given a unique ID based on the current timestamp, and its initial status is set to "Pending".

2. Delete Task



Users can delete tasks. When the delete button is clicked, the task is removed from local storage, and the UI updates accordingly. A notification (toast) is shown to confirm the deletion.

3. Update Task Status



The task status can be toggled between three states: Pending, In Progress, and Completed. The task's status is updated by modifying its data in local storage, which triggers a re-render of the task list. Depending on the current status, the status can be updated as follows:

Pending → In Progress

In Progress → Completed

Completed → Pending


4. Filter and Sort Tasks



The application provides functionality for filtering tasks based on their title (search functionality) and sorting them based on different criteria, such as:

Priority (High to Low or Low to High)

Creation date (Newest to Oldest or Oldest to Newest)


These operations help users quickly find and organize their tasks.

5. Search Task:



The UI includes a search bar that allows a user to search for tasks by their title, ensuring a seamless user experience.


---

App Architecture and State Management

The app uses local storage for persisting the state of tasks. Each time a task is added, updated, or deleted, it is immediately reflected in local storage, allowing the application to maintain task data across sessions without needing a database or external server.


---

How the App Works

1. Task Management



The user interacts with the app through a form where they input details for a new task, such as the title, description, and priority. When the form is submitted, the task is added to local storage and displayed in a table.

Each task is displayed with:

Title and Description.

Priority (High, Medium, Low).

Status (Pending, In Progress, Completed).

Delete Button to remove the task.

Status Toggle Button to change the task's status.


2. UI and Feedback



Framer Motion is used to animate certain UI elements, such as the heading, for a smooth transition effect.

React-Toastify is used to display toast notifications when tasks are added or deleted. This provides immediate feedback to the user about the changes.



---

Folder Structure

The project is organized into several key directories:

src/: The main source directory where all code resides.

components/: Contains reusable components like Task that display individual tasks.

context/: Contains the React Context for managing app-wide state and functions.



---

Libraries Used

React: JavaScript library for building user interfaces.

React-Toastify: Used for displaying toast notifications.

Framer Motion: For adding animations to the UI.

React Icons: For adding icons to the application.

Live Demo:https://taskify-niloy.netlify.app/

![Screenshot 2025-07-03 211141](https://github.com/user-attachments/assets/5330d25f-2c11-45de-80f1-dcf1096b612e)
![Screenshot 2025-07-03 211129](https://github.com/user-attachments/assets/e0e2d972-6149-4e43-bf28-b86bbcb7fa39)
![Screenshot 2025-07-03 211108](https://github.com/user-attachments/assets/09d3d0ae-6747-4616-843d-4b6cdfa9502f)
