import React from "react";
import "./App.css";
import Nav from "./shared/components/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={"w-full"}>
      <Nav />
    </div>
  );
}

export default App;
