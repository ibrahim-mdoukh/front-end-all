// test

// window.onload = function(){
//   document.querySelector("h1").style.color = 'red'; 
// }

// output

// output to screen 
// window.alert("how are you?")
// console.log("fusd")
// document.write("ibrahim"+44)
// document.write("<h1>hhhhh</h1>")
// اغلاق الصفحة
// window.close()
// رسالة خارجية بتظهر
// window.alert("hello from js file"); 
// بتطبع على الصفحة وبضيف عناصر ونصوص
// document.write("<h1>helooooo</h1>helooooo")
// تصنع عنصر 
// document.createElement("")
// الطباعة في الكونصول
// console.log("heloooooo")


// طريقة العرض في الكونصول
// console.log("helo");
// console.error("errrrror");
// console.table(["ahma" , "ibtks" , "annas"])
// بقدر انسق الرسالة 
// console.log("helo %cibrahim","color: red; font-size: 40px")
// تابع للapi web

// console.group("group 1");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("child group");
// console.log("message one");
// console.log("message two");
// console.groupCollapsed("grand child group");
// console.log("message one");
// console.log("message two");
// console.groupEnd();
// console.group("group 2");
// console.log("message one");
// console.log("message two");

// ec 6   طؤيقة كتابة اكواد بالشكل الجديد

/////////////////////////////////////////////////////////////////////////////
// نوع البيانات data type
// -string
// -number
// -array => object
// -object
// -booloon
// typeof بتعرض نوع البينات
// console.log(typeof "ibrahim");
// console.log(typeof 5000.77);
// console.log(typeof [10,15,17]);
// console.log(typeof ["os","dd","aa"]);
// console.log(typeof {name:'ods',age:18,cont:"egpt"});
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)


// varibles متغير
// to creat    
// var user = "osame",
// جبت العنصر الي معو اي دي hel 
// console.log(hel)  
// بتعدل بالمحتوى
// hel.innerHTML = "oooo";


// لاتستخدم كلمات محجوزة لا تستعمل الرموز الممنوعة 
// استعمل cmal case في التسمية


/*
  Var
  - Redeclare (Yes) اعادة تعريف وتغيرر قيمة 
  - Access Before Declare (Undefined)استخدام قبل التعريف
  - Variable Scope Drama [Added To Window object] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/


// console.log('Elzero Web "School"');
// console.log("Elzero Web 'School'");
// console.log("Elzero Web \"School\"");
// console.log('Elzero \\ Web \'School\'');
// console.log("Elzero \
// Web \
// School");
// console.log("Elzero\nWeb\nSchool");


// عملية الربط
/*
  Concatenation
*/
// let a = "We Love";
// let b = "JavaScript";
// document.write(a + " " + b);
// console.log(a,b);


/*
  Template Literals (Template Strings)
*/
// First Example
// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";
// console.log(a + " \"\" " + b +
// "\n" + c + " " + d);
// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);
// Second Example
// let title = "Elzero";
// let desc = "Elzero Web School";
// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;
// document.write(markup);


/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/
// console.log(10 + 20);
// console.log(10 + "Osama"); 

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN
// console.log(typeof NaN);

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4);
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1




/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
// بنحول الارقام من نص الى رقم حقيقي

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
// let a = "100";
// let b = 20;
// let c = true;

// console.log(+a + b + c);
// *
//   Assignment Operators
// */

// let a = 10;

// a = a + 20;

// a = a + 70;

// a += 100; // a = a + 100

// a -= 50; // a = a - 50

// a /= 50; // a = a / 50

// Number//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 23434343434);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString() 
  حول الرقم الى نص
  - toFixed(3)
  هات 3 عناصر بعد الفاصلة العشرية
  - parseInt()
  بتطلع الرقم الصحيي من النص
  - parseFloat()
  بتطلع الرقم العشري من النص
  - isInteger(الرقم) [ES6]
  هل الرقم عددصحيح 
  - isNaN() [ES6]
  هل المدخل عدد 
*/

// console.log((100).toString());
// console.log((100.10).toString());

// console.log(100.554555.toFixed(3));

// console.log(Number("100 Osama"));
// console.log(+"100 Osama");
// console.log(parseInt("100 Osama"));
// console.log(parseInt("Osama 100 "));
// console.log(parseInt("100.500 Osama"));
// console.log(parseFloat("100.500 Osama"));

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN("Osama" / 20));


/*
  Math Object
  - round()تقريب
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6] قص
*/

// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));
// console.log(Math.random());
// console.log(Math.trunc(99.5));
// بتقصص

// String///////////////////////////////////////////////////////////////////////////////////////////////////
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

// let theName = "Ahmed";

// console.log(theName);
// console.log(theName[1]);
// console.log(theName[5]);

// console.log(theName.charAt(1));
// console.log(theName.charAt(5));

// console.log(theName.length);
// console.log(theName.trim());
// الجانبية تزيل المسافات 
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());



/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  مكان العنصرناقص الرقم لو انحط بعدها
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  مكان اخر عنصر ......
  - slice(Start [Mand], End [Opt] Not Include End)
  حط القيمة وانا بجيبلك العنصر 
  - repeat(Times) [ES6]
  كرر الجملة 
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2, 6));
// console.log(a.slice(-5, -3));

// console.log(a.repeat(5));

// console.log(a.split("", 6));



/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

// console.log(a.length);

// console.log(a.substring(2, 6));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6)); // 0 - 6
// console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web", 8));

// console.log(a.startsWith("E"));
// console.log(a.startsWith("E", 2));
// console.log(a.startsWith("zero", 2));

// console.log(a.endsWith("l"));



// array/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`${myFriends[1][2]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`${myFriends[3][1][2]}`);

// console.log(myFriends);
// myFriends[1] = "Gamal";
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"];
// console.log(myFriends);

// console.log(Array.isArray(myFriends));

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// myFriends.length = 2;

// console.log(myFriends);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift();

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop();

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);



/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed"));
// console.log(myFriends.indexOf("Ahmed", 2));

// console.log(myFriends.lastIndexOf("Ahmed"));
// console.log(myFriends.lastIndexOf("Ahmed", -2));

// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed", 2));

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// } 

// console.log(myFriends.indexOf("Osama"));
// console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);
// console.log(myFriends.sort().reverse());


/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// console.log(myFriends.slice(-4, -2));
// console.log(myFriends);

// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);


/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());




// Comparison Operators ( if )//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

// console.log(10 == "10"); // Compare Value Only
// console.log(-100 == "-100"); // Compare Value Only
// console.log(10 != "10"); // Compare Value Only

// console.log(10 === "10"); // Compare Value + Type
// console.log(10 !== "10"); // Compare Value + Type
// console.log(10 !== 10); // Compare Value + Type

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log(typeof "Osama" === typeof "Ahmed");



/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

/*
  Nested If
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {

//   price -= discountAmount;

// } else if (country === "Egypt") {

//   if (student === true) {

//     price -= discountAmount + 30;

//   } else {

//     price -= discountAmount + 10;

//   }

// } else {

//   price -= 10;

// }

// console.log(price);

/*
  Conditional (Ternary) Operator
*/

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs";

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log(20)
//   : theAge > 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge > 60
//   ? console.log("Larger Than 60")
//   : console.log("Unknown");



/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = 0;

// console.log(`The Price Is ${price || 200}`);
// console.log(`The Price Is ${price ?? 200}`);


// switch//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

// let day = "A";

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }

// loop//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }


/*
  Loop
  - Loop On Sequences
*/

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

/*
  Loop
  - Nested Loops
*/
// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log("#".repeat(15));
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// }\


/*
  Loop For Advanced Example
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

/*
  Loop
  - While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

/*
  Loop
  - Do / While
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);


/*Function//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

// function sayHello(userName) {
//   console.log(`Hi ${userName}`);
// }

// sayHello("Osama");
// sayHello("Sayed");
// sayHello("Ali");

/*
  Function Advanced Examples
*/

// function sayHello(userName, age) {
//   if (age < 20) {
//     console.log(`App is Not Suitable For You`);
//   } else {
//     console.log(`Hello ${userName} Your Age is ${age}`);
//   }
// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Ali", 18);

// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }

// generateYears(1982, 2021, 2020);

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i === 15) {
//       return `Interrupting`;
//     }
//     console.log(i);
//   }
// }

// generate(10, 20);


/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

// function calc(...numbers) {
//   // console.log(Array.isArray(numbers));
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i]; // result = result + numbers[i]
//   }
//   return `Final Result Is ${result}`;
// }

// console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else {
//     document.write(`<p>Skills Is Hidden</p>`);
//   }
//   document.write(`</div>`);
// }

// showInfo("Osama", 38, 20, "No", "Html", "CSS");

// function showDetails(...data) {
//   let name, age, isAvailable;

//   for (let i = 0; i < data.length; i++) {
//     typeof (data[i]) === "string" ?
//       name = data[i]

//       : typeof (data[i]) === "number" ?
//         age = data[i]

//         : data[i] === true ?
//           isAvailable = "Available" : isAvailable = "Not Available"
//   }

//   result = `<div>
//                 <h2> Hello ${name}, Your Age Is ${age}, You Are ${isAvailable} For Hire </h2>
//             </div>`;
//   document.write(result);
// }

// showDetails("Osama", 38, true);
// showDetails(38, "Osama", true);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);


/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

// let calculator = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(calculator(10, 20));

// function sayHello() {
//   console.log("Hello Osama");
// }

// document.getElementById("show").onclick = sayHello;

// setTimeout(function elzero() {
//   console.log("Good");
// }, 2000);

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 2

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));

// // Example 3

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return concatMsg();
// }

// console.log(sayMessage("Osama", "Mohamed"));


/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//   return 10;
// };

// print = () => console.log(10);
// print();


// let print = function (num) {
//   return num;
// };

// let print = num => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// };

// let print = (num1, num2) => num1 + num2;

// console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local ${a}`);
//   console.log(`Function - From Local ${b}`);
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

// function parent() {
//   let a = 10;

//   function child() {
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100;
//       console.log(`From Grand ${a}`);
//       console.log(`From Grand ${b}`);
//     }
//     grand();
//   }
//   child();
// }
// parent();



/*Higher////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }

// console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

// function addition(ele) {
//   return ele + ele;
// }

// let add = myNums.map(addition);

// console.log(add);


/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let filterdFriends = friends.filter(function (el) {
//   return el.startsWith("A") ? true : false;
// });

// console.log(filterdFriends);

// Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function (el) {
//   return el % 2 === 0;
// });

// console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence
//   .split(" ")
//   .filter(function (ele) {
//     return ele.length <= 4;
//   })
//   .join(" ");

// console.log(smallWords);

// Ignore Numbers
// let ignoreNumbers = "Elz123er4o";

// let ign = ignoreNumbers
//   .split("")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .join("");

// console.log(ign);

// Filter Strings + Multiply
// let mix = "A13BS2ZX";

// let mixedContent = mix
//   .split("")
//   .filter(function (ele) {
//     return !isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele * ele;
//   })
//   .join("");

// console.log(mixedContent);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(add);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });

// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);


/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });
/* <ul>
  <li class="active">One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<div class="content">
  <div>Div One</div>
  <div>Div Two</div>
  <div>Div Three</div>
</div> */