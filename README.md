Task Manager App with Redux

This application is a Task Manager built using React and Redux for managing global state. The app allows users to perform various actions such as adding, deleting, and updating tasks, with the task data being persistently stored in the Redux store.

How to Run the Application

1. Clone the repository

Start by cloning the project to your local machine. Open a terminal window and run the following command:

git clone https://github.com/your-repository-name/task-manager-redux.git

2. Install dependencies

After cloning the repository, navigate to the project folder:

cd task-manager-redux

Install all necessary dependencies by running:

npm install

3. Run the Application

Once the dependencies are installed, you can start the application by running:

npm start

The application will be running at http://localhost:3000.


---

Core Functions and Features

1. Add Task

The application allows the user to add new tasks. When a user submits the task form, a new task with attributes like title, description, and priority is added to the Redux state. Each task is given a unique ID based on the current timestamp, and its initial status is set to "Pending".

2. Delete Task

Users can delete tasks. When the delete button is clicked, the task is removed from the Redux state, and the UI updates accordingly. A notification (toast) is shown to confirm the deletion.

3. Update Task Status

The task status can be toggled between three states: Pending, In Progress, and Completed. The task's status is updated by dispatching a Redux action, which triggers a re-render of the task list. Depending on the current status, the status can be updated as follows:

Pending changes to In Progress

In Progress changes to Completed

Completed changes back to Pending


4. Filter and Sort Tasks

The application provides functionality for filtering tasks based on their title (search functionality) and sorting them based on different criteria, such as:

Priority (High to Low or Low to High)

Creation date (Newest to Oldest or Oldest to Newest)


These operations help users quickly find and organize their tasks.

5.Search Task:
The ui comprises a searc bar which allows a user to seach the task by its title ,thereby ensuring seamless user experience

---

App Architecture and State Management

The app uses Redux for managing the global state of tasks. Redux ensures that the application’s task list is available across all components, which makes it easier to add, delete, and update tasks.

Redux Store

The Redux store is configured to hold the state of tasks. This store is created using Redux Toolkit, which simplifies the setup process and includes useful features like createSlice for defining actions and reducers in one place.

Reducers and Actions

addTask: Adds a new task to the state.

deleteTask: Removes a task based on its unique ID.

updateTaskStatus: Toggles the status of a task between Pending, In Progress, and Completed.


These actions are dispatched from within React components when tasks are added, deleted, or their statuses are updated.

React Context

The Context API is used to provide necessary state and functions (like adding tasks, deleting tasks, updating statuses) to all components in the app. It simplifies the flow of data by avoiding prop drilling and makes the app's state accessible globally.


---

Persistent Redux Store

This application uses Redux for state management, ensuring that task data is stored persistently within the Redux store. Every time a task is added, updated, or deleted, it is immediately reflected in the global Redux store. This approach provides persistent task data across the application, and you don't need local storage or a database to maintain it.

The app does not rely on local storage for persistence, and the state is managed entirely within the Redux store, which can be extended to integrate with any external persistence layer (e.g., server-side APIs) if required in the future.


---

How the App Works

Task Management

The user interacts with the app through a form where they input details for a new task, such as the title, description, and priority. When the form is submitted, the task is added to the Redux store and displayed in a table.

Each task is displayed with:

Title and Description.

Priority (High, Medium, Low).

Status (Pending, In Progress, Completed).

Delete Button to remove the task.

Status Toggle Button to change the task's status.


UI and Feedback

Framer Motion is used to animate certain UI elements like the heading for a smooth transition effect.

React-Toastify is used to display toast notifications when tasks are added or deleted. This provides immediate feedback to the user about the changes.



---

Folder Structure

The project is organized into several key directories:

src/: The main source directory where all code resides.

components/: Contains reusable components like Task that display individual tasks.

redux/: Contains Redux-related files, including the taskSlice.js and Redux store configuration.

context/: Contains the React Context for managing app-wide state and functions.




---

Libraries Used

React: JavaScript library for building user interfaces.

Redux: State management tool that helps in managing the global state of tasks.

React-Redux: Provides bindings for Redux and React, making it easier to connect the Redux store to React components.

React-Toastify: Used for displaying toast notifications.

Framer Motion: For adding animations to the UI.

React Icons: For adding icons to the application.
