// console.log("Hello World");
// console.log("Shubham Prajapati")

// let pencil=10;
// let eraser=5;
// console.log("Total Price:",pencil+eraser,"Rupees");
// console.log(`Total Price :${pencil+eraser} Rupees`);

// let num=10;
// ++num;
// console.log(num);
// num++;
// console.log(num);

// let age=13;
// console.log("Before if statement");
// if(age>=18){
//     console.log("You can vote");
// }

// if(age<18){
// console.log("You can not vote");
// }
// console.log("After if statement");

// let name="Shubham";
// if (name=="Shubham"){
//     console.log(`welcome to ${name}`);
// }

// let size="S"
// if (size=="XL"){
//     console.log("Price :250");
// }
// else if (size=="L"){
//     console.log("Price :200");
// }
// else if (size=="M"){
//     console.log("Price :100");
// }
// else if (size=="S"){
//     console.log("Price :50");
// }
// else{
//     console.log("Enter Valid Size");
// }

// let marks=80;
// if (marks>=33){
//     if (marks>=80){
//         console.log("O");
//     }
//     else{
//         console.log("A");
//         }
// }
// else{
//     console.log("Better Luck next Time");
// }

//Logical Operators
// let str="abc";
// if (str[0]==="a"&&str.length==3){
//     console.log("Good String");
// }
// else{
//     console.log("Bad String");
// }

// let num=12;
// if((num%3===0)&& (num+1==15) || (num-1===11)){
//     console.log("Safe");
// }
// else{
//     console.log("Unsafe");
// }

// if(" "){
//     console.log("It has true value");
// }
// else{
//     console.log("It has fasle value");
// }

//Switch Statements
// let color="red";
// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("slow down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Light is broken");
// }
// console.log("after switch statement");

// let day=4
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;    
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// alert("something is wrong");
// console.log("This is a log message");
// console.error("This is a error message");
// console.warn("This is a warning message");

// let name=prompt("Enter your name");
// console.log(name);
// let msg="Welcome " +name+"!";
// alert(msg);

// let num1=2563;
// let num2=6552;
// if (num1%10===num2%10){
//     console.log("Same");
// }else{
//     console.log("Not same");
// }

////////////////////////////////////////////////////
//STRING AND ITS METHODS
// let msg="   Shubham   "
// console.log(msg.trim());

// let name="shubham";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let name="Shubham";
// console.log(name.indexOf("S"));
// console.log(name.indexOf("a"));
// console.log(name.indexOf("m"));

// let name="       shubham";
// console.log(name.toUpperCase().trim());

// let name="ShubhamPrajapati";
// console.log(name.slice(7));
// console.log(name.slice(0,7));
// console.log(name.slice(8,10));
// console.log(name.slice());
// console.log(name.slice(-5));

let name="ILoveCoding";
console.log(name.replace("Love","Do"));
console.log(name.repeat(2));