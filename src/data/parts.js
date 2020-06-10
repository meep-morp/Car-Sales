// RANDOM NUMBER GENERATOR -->
export const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.round(Math.random() * (max - min + 1) + min);
};

// PARTS ARRAY -->
export const randomParts = [
	{ id: 1, name: "V-6 engine", price: 1500 },
	{
		id: 2,
		name: "Racing detail package",
		price: 1500,
	},
	{
		id: 3,
		name: "Premium sound system",
		price: 500,
	},
	{ id: 4, name: "Carbon Fiber Wrap", price: 250 },
	{
		id: 5,
		name: "Reverse Camera",
		price: randomNumber(250, 1500),
	},
	{
		id: 6,
		name: "GPD Systems",
		price: randomNumber(250, 1500),
	},
	{
		id: 7,
		name: "Bucket Seats",
		price: randomNumber(250, 1500),
	},
	{
		id: 8,
		name: "Off-Road Tires",
		price: randomNumber(250, 1500),
	},
	{
		id: 9,
		name: "Off-Road Suspension",
		price: randomNumber(250, 1500),
	},
	{
		id: 10,
		name: "Engine Snorkel",
		price: randomNumber(250, 1500),
	},
];