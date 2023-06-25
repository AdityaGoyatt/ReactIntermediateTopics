import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TaskProvider from "./state-management/Tasks";
import AuthProvider from "./state-management/Users";
import Counter from "./state-management/Counter/Counter";
const App = () => {
  return (
    <TaskProvider>
      <AuthProvider>
        <NavBar />
        <Counter />
        <HomePage />
      </AuthProvider>
    </TaskProvider>
  );
};

export default App;
