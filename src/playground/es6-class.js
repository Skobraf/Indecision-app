class Person {
	constructor(name = "Anonymous", age = 0) {
		this.name = name;
	}
	getGreeting() {
		return `Hi, He is ${this.name} `;
	}
	getDescription() {
		return `Hi ${this.name} has ${this.age}`
	}
}

class Traveler {
	constructor(homeLocation) {
		super(name,age);
		this.homeLocation = homeLocation;
	}
	hasHome() {
		return !!this.homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if(this.hasHome()) {
			greeting += `he lives in ${this.hasHome}`
		}
		return greeting;
	}
}

const me = Person.new('Andrew Mead');
console.log(me.getGreeting);

const other = Person.now();
console.log(other.getGreeting);