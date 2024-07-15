// Activity1 : Variable Declaration
// Task1 : Declare variable using 'var' keyword and assign it a number, and log the value to the console.

var num = 15;
console.log(num);

// Task2: Declare variable using 'let' keyword assign it a string, and log value to the console.

let str = "chaicode";
console.log(str);

// Activity2: Constant Declarartion
// Task3: Declare variable using const keyword assign it a string, and log the value to the console.

const value = 30;
console.log(value);

// Activity3: Datatypes
// Task4: Create variable using different data tpye(number, string, boolean, object, array) and log each variable's type using the 'typeof' operator.

let num1 = 20;
console.log(typeof num1);
let str1 = "chaiAurCode";
console.log(typeof str)1;
let boolean = true;
console.log(typeof boolean);
let techStackList = ["javascript","react","typescript","nodejs","nextjs","expressjs"];
console.log(typeof techStackList);
let nullValue = null;
console.log(typeof nullValue);
let undefiend = undefined;

let obj ={
    userName: "mangilal",
    age:26
}


// Activity4: Reassgining variable
// Task5: Reassigning variable using let, assign it an initail value, reassing a new value and log both values to the console.

let firstValue = "chai"
console.log(firstValue);

//Reassigning value

firstValue = "chaiAurCode";
console.log(firstValue);

// Activity6: Understand 'const'
// Task6: Try reassigning a variable declared with const and observe the error.

const age = 26;
console.log(age);
// ages = 24;   we can not reassining const  variable once declare 
// console.log(age);


//Feature Request:

//1.Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let num2 = 25;
console.log("type number and value is: ",num2);

let str2 = "chai aur code community";
console.log("type of string and value is: ",str2);

let booleans = true;
console.log("type of boolean and value is: ",booleans);

let nullType = null;
console.log("type of null and value is: ",nullType);

let undefines;
console.log("type of undefined and value is: ",undefines);

let cityName = ["sikar","jaipur","kota","udaipur","delhi"];
console.log("type of object and value is: ",cityName);

let obj1 ={
    name:"mangilal",
    age:26,
    LogedIn:true,
}
console.log("type of object and value is: ",obj1);


//2.Reassigning Demo: Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassignment.

let value1 = 30;
console.log("Intial value using let is : ",value1);

//reassing
value1 = 20;
console.log("Reassigning value using let is : ",value1);

const value2 = 20;
console.log("Intial value using const is : ",value2);

//reassing
//value2 = 30;  //TypeError: Assignment to constant variable.
//console.log(value2);


