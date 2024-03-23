import { useState } from "react";
import "./App.css";
import Canvas from "@/pages/Canvas";
import KonvaTutorial from "./pages/KonvaTutorial";

function App() {
  return (
    <div className="App">
      <div className="tutorial-root">
        {/* <Canvas /> */}
        <KonvaTutorial />
      </div>
    </div>
  );
}

export default App;
