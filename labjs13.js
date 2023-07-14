"use strict";

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
  this.accelerate = function () {
    this.speed += 10;
    console.log(`Tốc độ mới của ${this.make}: ${this.speed}`);
  };
  this.brake = function () {
    this.speed -= 5;
    console.log(`Tốc độ mới của ${this.make}: ${this.speed}`);
  };
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);
console.log(car1);
car1.accelerate();

console.log(car2);
car2.brake();




////////////////////////////////////////////////////////////////////////////
// Lab 13.2: Sử dụng ES6 Class


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  brake() {
    this.speed -= 5;
    console.log(`Tốc độ mới của ${this.make}: ${this.speed}`);
  }
  accelerate() {
    this.speed += 10;
    console.log(`Tốc độ mới của ${this.make}: ${this.speed}`);
  }
  get speedUS() {
    return this.speed * 1.6;
  }
  set speedUS(speed) {
    this.speed = speed;
  }
}
console.log(car1);
car1.accelerate();
console.log(car2);
car2.brake();





////////////////////////////////////////////////////////////////////////////////

// Lab 13.3: Tính kế thừa

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  }
  brake() {
    super.brake();
  }
}

let electricCar = new EV("Tesla", 120, 23);
console.log(electricCar);
electricCar.chargeBattery(25);
console.log(electricCar);
electricCar.accelerate();
console.log(electricCar);
electricCar.brake();
console.log(electricCar);

/////////////////////////////////////////////////////////////////////////////////

// Lab 13.4: Tính kế thừa sử dụng ES6

class EVCl extends CarCl {
  // chế độ riêng tư
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  brake() {
    super.brake();
  }
}

let electricCar2 = new EVCl("Rivian", 120, 23);
console.log(electricCar2);
electricCar.chargeBattery(25);
console.log(electricCar2);
electricCar.accelerate();
console.log(electricCar2);
electricCar.brake();
console.log(electricCar2);
