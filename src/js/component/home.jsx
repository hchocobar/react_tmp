import React from "react";

import Saludo from "./Saludo.jsx";
import Counter from "./Counter.jsx";
import Counter2 from "./Counter2.jsx"

//create your first component
const Home = () => {
	return (
		<div className="container">
			{/* <Saludo name="Héctor"/> */}
      {/* <Counter/> */}
      <Counter2/>

		</div>
	);
};

export default Home;
