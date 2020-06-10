import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
	const cars = useSelector(state => state.addFeatures.cars);
	const additionalFeatures = useSelector(state => state.addFeatures.additionalFeatures);
	const additionalPrice = useSelector(state => state.addFeatures.additionalPrice)

	return (
		<Router>
			<Route path="/" exact>
				<div className="home">
					<h1>Cars For Sale</h1>
					{cars.map(car => (
						<Link to={`/${car.id}`} className="car" >
							<h2>{car.name}</h2>
							<img src={car.image} alt="" />
						</Link>
					))}
				</div>
			</Route>
			<Route path="/:id">
				<div className="boxes">
					<div className="box">
						<Header car={cars} />
						<AddedFeatures car={cars} />
					</div>
					<div className="box">
						<AdditionalFeatures additionalFeatures={additionalFeatures} />
						<Total car={cars} additionalPrice={additionalPrice} />
					</div>
				</div>
			</Route>
		</Router>
	);
};

export default App;
