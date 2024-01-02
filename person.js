class Person {
  constructor(firstName, lastName, age, course, email, mobile, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;
    this.email = email;
    this.mobile = mobile;
    this.city = city;
  }
  getPersonDetails() {
    return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nCourse: ${this.course}\nE-mail: ${this.email}\nMobile: ${this.mobile}\nCity: ${this.city}`;
  }
}

let person1 = new Person(
  "Senapathi",
  "Manoharan",
  28,
  "Full Stack Developer",
  "manoharsena@gmail.com",
  9952670947,
  "Erode"
);

let person2 = new Person(
  "Sharmela",
  "Ganesan",
  23,
  "Artificial Intelligence",
  "sharmeg@outlook.com",
  7978263192,
  "Chennai"
);

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());

//output
/*
person1
Name: Senapathi Manoharan
Age: 28
Course: Full Stack Developer
E-mail: manoharsena@gmail.com
Mobile: 9952670947
City: Erode
*/

/*
person2
Name: Sharmela Ganesan
Age: 23
Course: Artificial Intelligence
E-mail: sharmeg@gmail.com
Mobile: 7978263192
City: Chennai
*/
