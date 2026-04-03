import { useState } from "react";
import ContextExample from "./examples/ContextExample";   // путь может отличаться
import ZustandExample from "./examples/ZustandExample";

function App() {
  const [mode, setMode] = useState("context");

  return (
    <div style={{ padding: 20 }}>
      <h1>React State Management Comparison</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setMode("context")}>
          Context API
        </button>

        <button onClick={() => setMode("zustand")} style={{ marginLeft: 10 }}>
          Zustand
        </button>
      </div>

      {mode === "context" ? <ContextExample /> : <ZustandExample />}
    </div>
  );
}

export default App;
