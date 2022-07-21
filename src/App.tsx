import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoginScreen } from "screens/login";
import { ProjectScreen } from "screens/project-list";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/*<ProjectListScreen />*/}
    </div>
  );
}

export default App;
