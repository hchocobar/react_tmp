import React from "react";

import Saludo from "./Saludo.jsx";
import Counter from "./Counter.jsx";
import Counter2 from "./Counter2.jsx";

import Navbar from "./Navbar.jsx";
import Todos from "./Todos.jsx";

//create your first component
const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Todos/>
	
    </div>
  );
};

export default App;
