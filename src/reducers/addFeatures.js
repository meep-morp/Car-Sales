import { randomParts } from "../data/parts";
import { randomNumber } from "../data/parts";
import { cars } from "../data/cars";
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
		case "NEW_IMAGE": 
		return {
			...state,
			car: {
				...state.car,
				name: action.payload.name,
				image: action.payload.url
			}
		}
		case "REMOVE":
			return {
				...state,
				additionalFeatures: [...state.additionalFeatures, action.payload],
				car: {
					...state.car,
					features: state.car.features.filter(
						item => item.id !== action.payload.id
					),
				},
				additionalPrice: state.additionalPrice - action.payload.price,
			};
		case "ADD_NEW":
			return {
				...state,
				additionalFeatures: state.additionalFeatures.filter(item => {
					return item.id !== action.payload.id;
				}),
				car: {
					...state.car,
					features: [...state.car.features, action.payload],
				},
				additionalPrice: state.additionalPrice + action.payload.price,
			};
	}
};
