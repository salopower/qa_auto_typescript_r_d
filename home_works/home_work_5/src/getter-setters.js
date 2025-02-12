const person = {
    name: "Andrew",
    _age: 23,
    address: {
        city: "Falls Church",
        country: "USA"
    },
    hobbies: ["gaming", "football", "basketball"],
    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I live in ${this.address.city}, ${this.address.country}.`);
    },
    get age() {
        return this._age;
    },
    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Please enter a valid age.");
        }
    },
    get fullAddress() {
        return `${this.address.city}, ${this.address.country}`;
    },
    countHobbies() {
        return this.hobbies.length;
    }
};

console.log(person.age);
person.age = 30;
console.log(person.age);
person.age = -5;

console.log(person.fullAddress);
console.log(`Number of hobbies: ${person.countHobbies()}`);

person.introduce();
