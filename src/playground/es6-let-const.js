const fullName = "andrew mead"

const getFirstName = (x) => {
	const firstName = x.split(' ')[0];
	return firstName;
}
getFirstName(fullName);

const multiplier = {
	numbers: [1,2,3],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((value) => value * this.multiplyBy);
	}
};
console.log(multiplier.multiply())