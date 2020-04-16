// JavaScript Document

//creating base Person class
class Person {
    //constructing
    constructor(name, age, gender, classes) {
        this.name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    //greeting method for person
    greeting() {
        console.log(`Hi! I'm ${this.name}`);
    };

    //bye method for person
    bye() {
        //there was dot after name so it was; this.name.
        console.log(`${this.name} has left the building. Bye for now!`);
    };
}

// instantiating new person obj
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);

// instantiating new person obj
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


// creating teacher class which extends person
class Teacher extends Person {
    //constructing
    constructor(name, last, age, gender, interests, subject, grade) {
        //base class values
        super(name, age, gender, interests);
        // subject and grade are specific to Teacher
        this.subject = subject;
        this.grade = grade;
    }
}

//instantiating teacher object
const teacher = new Teacher("Jessica", "Gilfillan", "30", "female", "cats", "js", "100");

