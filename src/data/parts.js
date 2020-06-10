// RANDOM NUMBER GENERATOR -->
export const randomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.round(Math.random() * (max - min + 1) + min);
};

// PARTS ARRAY -->
export const randomParts = [
	{ id: randomNumber(0, 10000000000), name: "V-6 engine", price: 1500 },
	{
		id: randomNumber(0, 10000000000),
		name: "Racing detail package",
		price: 1500,
	},
	{
		id: randomNumber(0, 10000000000),
		name: "Premium sound system",
		price: 500,
	},
	{ id: randomNumber(0, 10000000000), name: "Carbon Fiber Wrap", price: 250 },
	{
		id: randomNumber(0, 10000000000),
		name: "Reverse Camera",
		price: randomNumber(250, 1500),
	},
	{
		id: randomNumber(0, 10000000000),
		name: "GPD Systems",
		price: randomNumber(250, 1500),
	},
	{
		id: randomNumber(0, 10000000000),
		name: "Bucket Seats",
		price: randomNumber(250, 1500),
	},
	{
		id: randomNumber(0, 10000000000),
		name: "Off-Road Tires",
		price: randomNumber(250, 1500),
	},
	{
		id: randomNumber(0, 10000000000),
		name: "Off-Road Suspension",
		price: randomNumber(250, 1500),
	},
	{
		id: randomNumber(0, 10000000000),
		name: "Engine Snorkel",
		price: randomNumber(250, 1500),
	},
];