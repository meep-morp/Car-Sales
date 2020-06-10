import { randomParts } from "../data/parts";
import { randomNumber } from "../data/parts";
import { cars } from "../data/cars";
import { bindActionCreators } from "redux";
/*	STRETCH GOAL	*/
// Random number generator for cost of parts & for index of random list


const initialState = {
	additionalPrice: 0,
	cars,
	additionalFeatures: [
		randomParts[randomNumber(0, 9)],
		randomParts[randomNumber(0, 9)],
		randomParts[randomNumber(0, 9)],
		randomParts[randomNumber(0, 9)],
	],
};

export const addFeatures = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case "REMOVE":
			state.cars[action.payload.car.id].features.filter(item => {
				return item.id !== action.payload.id.id
			})
			return {
				...state,
				additionalFeatures: [...state.additionalFeatures, action.payload.id],
				car: {
					...state.car,
				},
				additionalPrice: state.additionalPrice - action.payload.price,
			}
		case "ADD_NEW":
			state.cars[action.payload.car.id].features.push(action.payload.id);
			return {
				...state,
				additionalFeatures: state.additionalFeatures.filter(item => {
					return item.id !== action.payload.id.id;
				}),
				cars: [
					...state.cars,
				],
				additionalPrice: state.additionalPrice + action.payload.price,
			};
	}
};
