// function wrapInArray(obj: string | string[]) {
//     if(typeof obj === "string") {
//         return [obj];
//     }
//     return obj;
// }


// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type objectWithNameArray = Array<{name: string}>;


// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }


// interface Point {
//     x: number;
//     y: number;
// }

// function logPoint(p: Point) {
//     console.log(`${p.x}, ${p.y}`);
// }


// const point = {x: 12, y: 26};
// logPoint(point);


// const rect = {x: 33, y: 3, height: 80};
// logPoint(rect);

// const color = {hex: "#187ABF"};
// logPoint(color);

// class VirtualPoint {
//   x: number;
//   y: number;
 
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }
 
// const newVPoint = new VirtualPoint(13, 56);
// logPoint(newVPoint); // logs "13, 56"

// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("first(): called");
//     };
// }

// function second() {
//     console.log("second(): factory evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("second(): called");
//     };
// }


// class ExampleClass {
//     @first()
//     @second()
//     method() {}
// }

// first()
// second()
// second()

// function log(message) {
//     conosole.log(message);
// }

// var message = "Hello world"

// let message = 'abc';
// let endsWithC = (<sting>message).endsWith('C');

// let alternativeWay = (message as string).endsWith('C');


// interface Point {
//     x: number,
//     y: number,
//     draw: (point) => void
// }


// let drawPoint = (point: Point) => {
//     //...
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

// class Point {
//     x: number;
//     y: number;

//     constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//     draw() {
//         console.log('X' + this.x + ',Y: ' + this.y);
//     }

//     getDistance(another: Point) {

//     }
// }

// let point = new Point(1, 2);


// point.draw();




//Access Modifier


// class Point {
//     private x: number;
//     y: number;

//     constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//     draw() {
//         console.log('X' + this.x + ',Y: ' + this.y);
//     }

//     getDistance(another: Point) {

//     }
// }

// let point = new Point(1, 2);
// point.x = 3;   // Not accessible.

// point.draw();


// refactoring
// class Point {
//     // private x: number;
//     // private y: number;

//     constructor(private x: number, private y: number) {
//     this.x = x;
//     this.y = y;
//   }

//     draw() {
//         console.log('X' + this.x + ',Y: ' + this.y);
//     }

//     getDistance(another: Point) {

//     }
// }

// let point = new Point(1, 2);


// point.draw();



/////////////////////////////////////////////////

// Properties

// class Point {
//   private x: number;
//   private y: number;

//   constructor(x: number = 0, y: number = 0) {
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log('X: ' + this.x + ', Y: ' + this.y);
//   }

//   get X() {
//     return this.x;
//   }

//   set X(value: number) {
//     if (value < 0) {
//       throw new Error('value cannot be less than 0');
//     }

//     this.x = value;
//   }
// }

// let point = new Point(1, 2);
// let x = point.X;
// point.X = 10;
// point.draw();



///////////////////////////////////////////


// Modules

import {Point} from "./point";


let point = new Point(1,2);
point.draw();



















