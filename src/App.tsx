import { useReducer } from "react";
import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import taskReducer from "./state-management/reducers/TaskReducer";
import { Task } from "./state-management/TaskList";
import TaskProvider from "./state-management/taskProvider";
import AuthProvider from "./state-management/AuthProvider";
const App = () => {
  return (
    <TaskProvider>
      <AuthProvider>
        <NavBar />
        <HomePage />
      </AuthProvider>
    </TaskProvider>
  );
};

export default App;
