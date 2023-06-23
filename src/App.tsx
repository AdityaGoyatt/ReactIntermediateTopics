import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskProvider from "./state-management/Tasks";
import AuthProvider from "./state-management/Users";
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
