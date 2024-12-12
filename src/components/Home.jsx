import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
	const counter = useSelector((state) => state.counter);
	const dispatcher = useDispatch();
	return (
		<div>
			<h1>{counter}</h1>
			<button></button>
		</div>
	);
};

export default Home;
