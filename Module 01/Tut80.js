"use strict";

// Proto creates a bond between two Object, now we can use this property in our previuios example
const user = {
    about() {
        console.log(`name: ${this.name} age: ${this.age} gender:${this.gender} email:${this.email} address:${this.address}`);
    },

    is18() {
        return (this.age >= 18);
    }
};

function CreateObject(name, age, gender, email, address) {
    const temp = Object.create(user);

    temp.name = name;
    temp.age = age;
    temp.gender = gender;
    temp.email = email;
    temp.address = address;

    // temp.about = user.about;
    // temp.is18 = user.is18;

    return (temp);
}

const NewObj = CreateObject("Ankit", 20, "Male", "xyz123@gmail.com", "adarsh nagar mahadeva, siwan");

console.log(NewObj);

NewObj.about();
console.log(NewObj.is18()); 
