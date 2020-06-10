import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../actions/carSalesActions";

const AddedFeature = props => {
	const dispatch = useDispatch();
	console.log(props.feature)
	return (
		<li>
			<button
				onClick={() => dispatch(remove(props.feature))}
				className="button"
        >
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
