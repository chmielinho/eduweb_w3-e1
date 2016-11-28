class Person {
	constructor(firstName, lastName) {
 
    if( !(this instanceof Person) ) {
        return new Person(firstName, lastName);
    }
 
    this.firstName = firstName;
    this.lastName = lastName;
	}
	sayHello() {
		console.log(`Cześć, nazywam się ${this.firstName} ${this.lastName}!`);
	}
}
 
 
class Programmer extends Person {
	constructor(firstName, lastName, lang = `JavaScript`) {
 
    super(firstName, lastName);
 
    this.lang = lang;
	}
	
	work() {
		this.sayHello();
		console.log(`Piszę właśnie kod w moim ulubionym języku, którym jest ${this.lang}.`);	
	}
};

var jsDev = new Programmer("Jan", "Kowalski", "Python");
 
jsDev.work();