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
document.write("Variable names can only contain Number, underscore, Alphbet and underscore.<br>");
document.write("Variable names are case sensitive <br>");
document.write("ariable names should not be JS Keyword <br>");

// chapter 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var a = prompt("Enter the value of a :");
var b=prompt("Enter the value of b : ");
ans=parseInt(a)+parseInt(b);
document.write("sum of "+a+" and "+b+" is "+ans+"<br><br>");


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var c = prompt("Enter the value of c :");
var d=prompt("Enter the value of d : ");
ans=parseInt(a)-parseInt(b);
ans1=parseInt(a)/parseInt(b);
ans2=parseInt(a)%parseInt(b);
document.write("subtraction of "+c+" and "+d+" is "+ans +"<br>");
document.write("module of "+c+" and "+d+" is "+ans1 +"<br>");



//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
document.write("<br>");
var number;
document.write("Value after variable declaration is: "+number+"<br>");
number=5;
document.write("Initial value: "+number+"<br>");
number++;
document.write("Value after increment is:  "+number+"<br>");
number=number+7;
document.write("Value after addition is:  "+number+"<br>");
number--;
document.write("Value after Decrement is:  "+number+"<br>");
number=number%3;
document.write("The remainder is :  "+number+"<br><br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var cost=600;
var number=5;
document.write("total cost to buy "+number+" tickets to a movie is "+number*cost +"PKR<br>");


// Write a script to display multiplication table of any number in your browser. E.g

var number=prompt("Enter a number");
document.write("Table of "+number+"<br>");
for(i=0;i<=10;i++)
{
    document.write(number+"X"+i+"="+number*i+"<br>");
}


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var temp=25;
f=(temp*9/5)+32;
document.write(temp+"<sup>0</sup>"+"C is "+f+"<sup>0</sup>F<br>");
var temp=70;
c=(temp-32)*5/9;
document.write(temp+"<sup>0</sup>"+"C is "+c+"<sup>0</sup>F<br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price1=prompt("Price of 1 item");
var order1=prompt("Quanity of 1 item is ");
document.write("Price of item "+order1+" is"+parseInt(order1)*parseInt(price1)+"<br>");
var price2=prompt("Price of 2 item");
var order2=prompt("Quanity of 2 item is ");
document.write("Price of item "+order2+" is"+parseInt(order2)*parseInt(price2)+"<br>");
var ship=prompt("Shipping charges ");
document.write("Shipping charges "+ship+"<br>");
total=parseInt(ship)+parseInt(order2)*parseInt(price2)+parseInt(order1)*parseInt(price1);
document.write("Total cost of your order is "+total+"<br>");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total=980;
var obtained_marks=804;
document.write("Total Marks : "+total+"<br>");
document.write("Obtained Marks : "+obtained_marks+"<br>");
document.write("Percentage : "+obtained_marks/total+" %<br>");



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var rs=prompt("Enter Dollar ");
var exchange_rate=104.80;
ans=exchange_rate*parseInt(rs);
document.write("<h1>Currency in PKR</h1>");
document.write("Total Currensy in PKR: "+ans+"<br>");


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var number=5;
ans=number+5*10/2;
document.write("Ans Is "+ans+"<br>");


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

var date=prompt("Enter Birth Year");
var year=prompt("Enter current Year");
ans=year-date;
document.write("Age is :"+ans+"<br>");



// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)

var radius=prompt("Enter Radius :");
pi=3.14;
document.write("Radius is :"+parseInt(radius)+"<br>");
document.write("The cirsumference of circule is :"+2*pi*parseInt(radius)+"<br>");
document.write("The Area is :"+2*pi*parseInt(radius)*parseInt(radius)+"<br>");








































