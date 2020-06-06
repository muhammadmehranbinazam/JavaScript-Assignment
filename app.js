// Chapter 1
// Question 1 . Write a script to greet your website visitor using JS alert box.

alert("Welcome to Mehran Software House Sir");

// Question 2 . Write a script to display following message on your web page:
alert("Error! Please enter a valid password");

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert("Welcome to JS Land....\nHappy Coding!");

// 4. Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert ("Happy Coding!");


// Chapter 2

// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName="Muhammad Mehran Bin Azam";


// 3. Write script to
        // a) Declare a JS variable, titled message.
        // b) Assign “Hello World” to variable message
        // c) Display the message in alert box.
var message="Hello World";
alert(message);


// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name="Mehran";
var age= 20;
alert(name);
alert(age+" years old");
alert("Certified Mobile Application Development");


// 5. Write a script to display the following alert using one JS variable:

var text="PIZZA";
var number=text.length;
for(i=0;i<text.length;i++)
{
    for(j=0;j<number;j++)
    {
        document.write(text[j]);
    }
    document.write("<br>");
    number=number-1;
    
}


// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email="mehranazam03@gmail.com";
alert("my email address is "+email);


// 7.Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book="A smarter \nway to learn JavaScript";
alert("I am trying to learn from the the book" +book);


// 8. Write a script to display this in browser through JS

document.write("<p>Yah! I can write HTML content through JavaScript</p>");

// 9.Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”


design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

// chapter 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age=15;
alert("I am "+age+" years old");


// 2.Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.


var visit=14;
alert("you have visited this site "+ visit+" times");


// 3.Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear=2000;
document.write("My birth year is "+ birthYear+ "<br>");
document.write("data type of my declared variable is "+ typeof number+"<br>");



// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

name=prompt("Visitor Name");
title=prompt("Product title");
quantity=prompt("Enter Quantity");

document.write("<b>"+name+"</b>"+" Ordered " +"<b>"+quantity+" "+title+"</b>" +"on XYZ Clothing store");


// chapter 4

// 1. Declare 3 variables in one statement

var name , age , classname;


// 2. Declare 5 legal & 5 illegal variable names


// legal variables
 var name;
 var _age;
 var classname;
 var school;
 var status;

// illegal variable
// var 1age;
// var $name;
// var 3class;
// var %grant;
// var class;


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain Number, underscore, Alphbet and underscore.");
document.write("Variable names are case sensitive");
document.write("ariable names should not be JS Keyword");































