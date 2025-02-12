const person = {
    name: "Andrew",
    age: 23,
    address: {
        city: "Falls Church",
        country: "USA"
    },
    hobbies: ["gaming", "football", "basketball"],
    introduce: function () {
        console.log(`Hi, my name is ${this.name} and I live in ${this.address.city}, ${this.address.country}.`);
    }
};

person.introduce();
