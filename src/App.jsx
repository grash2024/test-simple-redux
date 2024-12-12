import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/counter/counterSlice";

const App = () => {
	const counter = useSelector((state) => state.counter);
	console.log("rendered");
	const dispatch = useDispatch();
	return (
		<div>
			{counter}
			<button onClick={() => dispatch(increment())}>press me</button>
		</div>
	);
};

export default App;
