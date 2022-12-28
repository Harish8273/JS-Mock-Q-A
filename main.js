// 1. Difference between “ == “ and “ === “ operators.

var x = 10;
var y = "10";

console.log(x === y);

// output will be false because both value and datatype are not same.

// 2. What is a spread operator?

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// The spread operator is often used in combination with destructuring.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedarray = [...array1, ...array2];

console.log(combinedarray)

var globalEC = "added";

// function a(){
//     var fa = "2nd function o/p1";
//     console.log(fa);
//     debugger;
//     b();
//     console.log("lets see when i will be on console");
// }
// function b(){
//     debugger;
//     console.log("2nd function o/p2");
//     c();
// }
// function c(){
//     debugger;
//     console.log("3rd function o/p3");
//     debugger;
//     a();
// }

// question 5-
// assigning a function to the variable example

let harry = function () {
    console.log("My nickname is Harry")
}
harry();

// assigning a function to the object example

let aboutme = {
    fname: "Harry",
    lname: "kumar",
    qualification: function () {
        console.log("I did B.tech in Mechanical Engineering");
    },
    sex: "Male",
}
aboutme.qualification()

// Pass a function as a argument.

const myName = () => {
    return "Harry";
}
const greeting = (sayHi, name) => {
    console.log(sayHi() + " " + name);
}
greeting(myName, "Harish Kumar");

// returning function or callback function..

function a() {
    return function b() {
        console.log("I will be expert in Javascript one day.")
    }
}
// a()();

const c = a();

c();

// clouser example-

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a + b;
        console.log(`The sum of two number a & b is ${sum}`);
    }
    innerFun();
}
outerFun(5);

// Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()

let userDetails = {
    name: "Harish",
    age: 24,
    designation: "Web developer",
}
let printDetails= function(state, country){
    console.log(this.name+ " " +"from"+ " " +state+ " "+country)
}
printDetails.call(userDetails, "UttarPradesh", "India");

let userDetails2 = {
    name: "Ashish",
    age: 22,
    designation: "student"
    }
    // function borrowing
printDetails.call(userDetails2, "Delhi", "India")

// Apply

printDetails.apply(userDetails2, ["Delhi", "India"]);

// Bind

let newfun = printDetails.bind(userDetails, "Delhi", "India")
newfun;