let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// arrays
let colors: string[] = [ 'red', 'green', 'blue' ];
let numbers: number[] = [ 1, 2, 3 ];
let truths: boolean[] = [ true, true, false ];

// classes
class Car {}
let car: Car = new Car();

// object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
