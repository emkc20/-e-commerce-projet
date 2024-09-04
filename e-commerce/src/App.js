import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("ilhan");

  const test = "aa";

  return (

    <div className="App">
      <>{name}</>
    </div>
  );
}

export default App;
