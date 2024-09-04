import React from "react";

import './main.css';
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  );
}

export default App;
