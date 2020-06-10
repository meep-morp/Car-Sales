import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../actions/carSalesActions";

const AddedFeature = props => {
	const dispatch = useDispatch();
	return (
		<li>
			<button
				onClick={() => dispatch(remove(props.feature, props.car))}
				className="button"
        >
				X
			</button>
			{props.feature.name}
		</li>
	);
};

export default AddedFeature;
