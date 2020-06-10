import React from "react";
import { useDispatch } from "react-redux";
import { addNew } from "../actions/carSalesActions";

const AdditionalFeature = props => {
  const dispatch = useDispatch();
	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button className="button" onClick={() => dispatch(addNew(props.feature, props.car))}>
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default AdditionalFeature;
