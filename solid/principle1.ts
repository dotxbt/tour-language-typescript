// Single Responsibility Principle

class Card {
  _wheels: number;
  _color: string;
  type: string;

  constructor(wheels: number, color: string, type: string) {
    this._wheels = wheels;
    this._color = color;
    this.type = type;
  }
}

const obj = new Card(3, "red", "SUV");
console.log(typeof obj);
console.log(obj._wheels);