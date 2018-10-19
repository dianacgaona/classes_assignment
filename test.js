// //1
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   };
//
//   ageOneYear(str) {
//     this.age++;
//     return `It's my birthday! Now, I'm ${this.age}`;
//   };
//
//   eating() {
//     return `Mmmm, mmmm.... I'mmmm loving itttt!`;
//   };
// }
//
// let oliver = new Human('Oliver', 24);
//
// console.log(oliver.age);
// oliver.ageOneYear();
// console.log(oliver.age);
// console.log(oliver.ageOneYear());
// oliver.eating();
// console.log(oliver.eating());

//2

// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(par1, par2) {
    let newVector = new Vector((this.x + par1), (this.y + par2));
    return newVector;
  };
  minus(par1, par2) {
    let newVector = new Vector((this.x - par1), (this.y - par2));
    return newVector;
  };
  length(par1, par2) {
    let length = Math.pow(par1, 2) + Math.pow(par2, 2);
    let squaredLength = Math.sqrt(length);
    return squaredLength;
  }
}

let vector = new Vector(2, 2);
let v1 = vector.plus(1, 1);
let v2 = vector.minus(1, 1);
let v3 = vector.length(3, 4);

console.log(v1);
console.log(v2);
console.log(v3);
