//The Farm Problem

function animals(chickens, cows, pigs) {

	const legsChickens = chickens *2;
	const legsCows = cows *4;
	const legsPigs = pigs *4;
	const totalLegs = legsChickens + legsCows + legsPigs;
	return totalLegs;
}