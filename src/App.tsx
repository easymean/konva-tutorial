import { useState } from "react";
import "./App.css";
import Canvas from "@/pages/Canvas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="tutorial-root">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
