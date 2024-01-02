class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  toString() {
    return `Circle [radius = ${this._radius} , color = ${this._color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle1 = new Circle();
const circle2 = new Circle(2, "green");
const circle3 = new Circle(5, "Yellow");

console.log(circle1.toString());
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());

console.log(circle2.toString());
console.log("Area:", circle2.getArea());
console.log("Circumference:", circle2.getCircumference());

console.log(circle3.toString());
console.log("Area:", circle3.getArea());
console.log("Circumference:", circle3.getCircumference());

//circle1
/*
Circle [radius = 1 , color = red]
Area: 3.141592653589793
Circumference: 6.283185307179586
*/

//circle2
/*
Circle [radius = 2 , color = green]
Area: 12.566370614359172
Circumference: 12.566370614359172
*/

//circle3
/*
Circle [radius = 5 , color = Yellow]
Area: 78.53981633974483
Circumference: 31.41592653589793
*/
