import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  const carState = useSelector(state => state.addFeatures);
	return (
			<div className="boxes">
				<div className="box">
					<Header car={carState.car} />
					<AddedFeatures car={carState.car} />
				</div>
				<div className="box">
					<AdditionalFeatures additionalFeatures={carState.additionalFeatures} />
					<Total car={carState.car} additionalPrice={carState.additionalPrice} />
				</div>
			</div>
	);
};

export default App;
