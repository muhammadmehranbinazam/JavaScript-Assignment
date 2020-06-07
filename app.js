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



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


var snack=prompt("Enter your favourit snack:");
var current=prompt('Current Age: ');
var max_age=prompt("Enter max age: ");
var amount=prompt("Enter per day snack eat amount:");
document.write("<h1>The lifetime Supply Calculator</h1>");
document.write("Favourity snack : "+snack+"<br>");
document.write("current age : "+current+"<br>");
document.write("Estimated max age : "+max_age+"<br>");
document.write("Amount of Snack per day : "+amount+"<br>");
document.write("Favourity snack : "+snack+"<br>");
new_age=parseInt(max_age)-parseInt(current+"<br>");
ans=parseInt(amount)*parseInt(new_age);
document.write("You will need "+ans+" "+snack+" to last you untill the ripe old age of "+max_age+"<br>");


// chapter 6-9


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var number=prompt("Enter a number :");
document.write("Result"+"<br>");
document.write("The vale of a is :"+number+"<br>");
document.write(".................................<br>");
++number;
document.write("The vale of ++a is :"+number+"<br>");
document.write("Now the value of a is  :"+number+"<br><br><br>");
number++;
document.write("The vale of a++ is :"+number+"<br>");
document.write("Now the value of a is  :"+number+"<br><br><br>");
--number;
document.write("The vale of --a is :"+number+"<br>");
document.write("Now the value of a is  :"+number+"<br><br><br>");
number--;
document.write("The vale of a-- is :"+number+"<br>");
document.write("Now the value of a is  :"+number+"<br><br><br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2, b = 1;
result=--a;
document.write(result+"<br>");
document.write("--a means first the value of a is decresed by 1 and then show in output <br>");
result=--a- --b;
document.write(result+"<br>");
document.write("--a means first the value of a is decresed by 1 and --b represent that the value of b is decreased by 1 and than b minus from a and show output<br>");
result=--a- --b + ++b;
document.write(result+"<br>");
document.write("--a means first the value of a is decresed by 1 and --b represent that the value of b is decreased by 1 and then value of b increase by 1 and  than b minus from a and and add the value of b show output<br>");
result=--a - --b + ++b + b--;
document.write(result+"<br>");
document.write("--a means first the value of a is decresed by 1 and --b represent that the value of b is decreased by 1  and then value of b increase by 1 and and after assigning the value of b then decrease by 1  than b minus from a and and add the value of b show output<br>");


// 3. Write a program that takes input a name from user &
// greet the user
var name=prompt("Enter your name :");
document.write("Welcomt "+name+"<br>");


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default

var number=5;
number=prompt("Enter a number for table :");
if (number==""){
    number=5;
for(i=0;i<=10;i++)
{
    document.write(number+"X"+i+"="+number*i+"<br>");
}
}
else{
    for(i=0;i<=10;i++)
{
    document.write(number+"X"+i+"="+number*i+"<br>");
}
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
name1=prompt("Subject 1 name: ");
name2=prompt("Subject 2 name: ");
name3=prompt("Subject 3 name: ");
total_marks=100;
sub1=prompt("Subject 1 marks: ");
sub2=prompt("Subject 2 marks: ");
sub3=prompt("Subject 3 marks: ");
document.write("<table>");
document.write("<tr>");
document.write("<th>");
document.write("Subject");
document.write("</th>");
document.write("<th>");
document.write("Total Marks");
document.write("</th>");
document.write("<th>");
document.write("Obtained Marks");
document.write("</th>");
document.write("<th>");
document.write("Percentage");
document.write("</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(name1);
document.write("</td>");
document.write("<td>");
document.write(total_marks);
document.write("</td>");
document.write("<td>");
document.write(sub1);
document.write("</td>");
document.write("<td>");
document.write((parseInt(sub1)/total_marks)*100);
document.write("</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>");
document.write(name2);
document.write("</td>");
document.write("<td>");
document.write(total_marks);
document.write("</td>");
document.write("<td>");
document.write(sub2);
document.write("</td>");
document.write("<td>");
document.write((parseInt(sub2)/total_marks)*100);
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write(name3);
document.write("</td>");
document.write("<td>");
document.write(total_marks);
document.write("</td>");
document.write("<td>");
document.write(sub3);
document.write("</td>");
document.write("<td>");
document.write((parseInt(sub3)/total_marks)*100);
document.write("</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td><b>"+total_marks*3+"</b></td>");
total_a=parseInt(sub1)+parseInt(sub2)+parseInt(sub3);
document.write("<td><b>"+total_a+"</b></td>");
document.write("<td>"+total_a/(total_marks*3)*100+"</td>");
document.write("</tr>");
document.write("</table>");


// chapter 9-11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var name=prompt("Enter City name:");
if (name=="Karachi" || name=="karachi"){
    document.write("Welcome to city of lights<br>");
}


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender=prompt("Enter Gender:");
if (gender=="male" || gender=="Male")
{
    document.write("Good Morning Sir<br>");
}else if (gender="female" || gender=="Female")
{
    document.write("Good Morning Ma’am<br>");
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var color=prompt("Enter traffic light color:");
document.write("<table class=\"text\">");
document.write("<tr><th>Signal Color</th><th>Message</th></tr>");
if(color=="Red" || color=="red")
{
    document.write("<tr class=\"light-blue\"><td><b>Red</b></td>");
    document.write("<td><b>You Must Stop</b></td></tr>");

}
else if(color=="Yellow" || color=="yellow")
{
    document.write("<tr class=\"light-blue\"><td><b>Yellow</b></td>");
    document.write("<td><b>Ready to Go</b></td></tr>");

}
else if(color=="Green" || color=="green")
{
    document.write("<tr class=\"light-blue\"><td><b>Green</b></td>");
    document.write("<td><b>Go Now</b></td></tr>");

}
document.write("</table>");


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fule=prompt("Input fule");
if (fule<0.25){
    document.write("Please refill the fuel in your car<br>");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.



 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//yes
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//NO
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}
//yes
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//yes
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//yes
 if (true){
alert("True");
}
//yes
if (false){
alert("False");
}
//no


if("car" < "cat"){
    alert("car is smaller than cat");
    }
    
//yes

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var number=Math.floor(Math.random() * 11); 
var inp=prompt("Enter guss number");
inp1=inp+1
if(number==inp1){
    document.write("Bingo! Correct answer<br>");
}
else if(number==inp){
    document.write("Close enough to the correct answer<br>");
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3

number=3;
if (number%3==0){
    document.write("the number is divisible by 3<br>");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

numer=3;
if (number%2==0){
    document.write("Even<br>");
}
else{
    document.write("Odd<br>");

}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var T=prompt("Enter temperatur :");
if (T > 40) {
    document.write("It is too hot outside<br>");
}
else if(T>30){
    document.write("The Weather today is Normal<br>");
}
else if(T>20){
    document.write("Today’s Weather is cool<br>");
}
else if(T>10){
    document.write("OMG! Today’s weather is so Cool.<br>");
}



// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
var a=prompt("Enter a");
var b=prompt("enter b");
var opt=prompt("Enter operation");
if(opt=="+"){
    ans=parseInt(a)+parseInt(b);
    document.write("Sum is "+ans+"<br>");
}
else if(opt=="-"){
    ans=parseInt(a)-parseInt(b);
    document.write("Subtraction is "+ans+"<br>");
}
else if(opt=="*"){
    ans=parseInt(a)*parseInt(b);
    document.write("Multiplication is "+ans+"<br>");
}
else if(opt=="/"){
    ans=parseInt(a)/parseInt(b);
    document.write("Division is "+ans+"<br>");
}
else if(opt=="%"){
    ans=parseInt(a)%parseInt(b);
    document.write("Remander is "+ans+"<br>");
}

//Chapter 9 to 11

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var ch =prompt("Enter any character number:");

	if (ch>=65 && ch<=90)
		document.write("Character is a capital letter");
    else if (ch>=97 && ch<=122)
    {
        document.write("Character is a small letter");
    }
    else if (ch>=48 && ch<=57)
    {
        document.write("Character is a digit");
    }
	else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
               (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
            {
        document.write("Character is a special symbol");
            }

//  Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
            

            var num1, num2;
num1 = prompt("Input the First integer", "0");
num2 = prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   document.write("The values "+ num1+ " and "+num2+ " are equal.");
  }
  

//   Write a program that takes input a number from user &
//   state whether the number is positive, negative or zero.
  

  var result,num;

  if (num >= 0) {
      result = true;
  } else if (num < 0) {
      result = false;
  }
  document.write(result);



//   Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}



    // This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}

// chapter 12 to 14

// Declare an empty array using JS literal notation to store
// student names in future

var arrayA = [];

// Declare an empty array using JS object notation to store
// student names in future.

var arrayB = new Array();

// Declare and initialize a strings array.
var arrayA = ["My name is mehran","My name is ali"];
// 4. Declare and initialize a numbers array
var arrayA = [1,2,3,3,4];
// 5. Declare and initialize a boolean array.

var arrayA = [true,false];

// 6. Declare and initialize a mixed array.
var arrayA = ["ali",1,2];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var arrayA = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications<br>");
for (i=0;i<arrayA.length;i++)
{
    document.write(i+1 +")"+arrayA[i]+"<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var arrayA = ["Micheal","Jhone","toney"];
var arrayB = [320,230,480];
for (i=0;i<arrayA.length;i++){
    document.write("Score of "+arrayA[i] +" is "+arrayB[i]+".Percentage is "+ (arrayB[i]/500)*100 +" %<br>");
}




// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser


// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var arrayA = [320,230,480,120];
document.write("Score of Student :");
for (i=0;i<arrayA.length;i++)
{
    document.write(arrayA[i]+",");
}
document.write("<br>");
arrayA.sort()
document.write("Order Score of Student :");
for (i=0;i<arrayA.length;i++)
{
    document.write(arrayA[i]+",");
}



// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Write a program to create a single string from the
// below mentioned array:
document.write("<br>");
var arr = ["This ","  is ", " my ", " cat"];
document.write(arr.join(""));

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

document.write("<br>");
var arr = ["This ","  is ", " my ", " cat"];
for(i=0;i<arr.length;i++){
    document.write(arr[i]);
}

// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

document.write("<br>");
var arr = ["This ","  is ", " my ", " cat"];
arr.reverse();
for(i=0;i<arr.length;i++){
    document.write(arr[i]);
}


// . Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
document.write("<br>")
var namelist=["Apple","Samsung", "Motorola"," Nokia", "Sony", "Haier"];
document.write("<select>")
for (i=0;i<namelist.length;i++)
{
    document.write("<option>"+namelist[i]+"</option>");
}
document.write("</select>")

// chapter 17 to 20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arra=[];

// Declare and initialize a multidimensional array
// representing the following matrix:

var items = [
    [0, 1, 2, 2],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];


//   3. Write a program to print numeric counting from 1 to 10.
for (i=0;i<=10;i++)
{
    document.write(i+"<br>");
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

var number=prompt("Enter a number");
var len=prompt("Enter the lenth of table");
document.write("Table of "+number+"<br>");
for(i=0;i<=len;i++)
{
    document.write(number+"X"+i+"="+number*i+"<br>");
    
}



// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(i=0;i<fruits.length;i++){
    document.write(fruits[i]+"<br>");
}



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h1>Counting:</h1>");
for (i=1;i<16;i++){
document.write(i+",");
}
document.write("<br>");
document.write("<h1>Reverse Counting : </h1>");
for (i=10;i>=1;i--){
document.write(i+",");
}
document.write("<br>");
document.write("<br>");
document.write("<h1>Even : </h1>");
for (i=0;i<21;i++){
    if (i%2==0){
document.write(i+",");
    }
}
document.write("<br>");
document.write("<h1>Odd : </h1>");
for (i=0;i<20;i++){
    if (i%2!=0){
document.write(i+",");
    }
}

document.write("<br>");
document.write("<span><h1>Series : </h1></span>");
for (i=1;i<21;i++){
    if (i%2==0){
document.write(i+"K,");
    }
}




// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
document.write("<br>");

A = ["cake", "apple pie", "cookie", "chips", "patties"];
var itemin=prompt("Enter item name");
for (i=0;i<A.length;i++)
{
if (itemin==A[i]){
    document.write(itemin+" is Avalible at index "+i +" in Our Backery<br>");
}
else{
    document.write("We are Sorry."+itemin+" is not AVALIBLE in our backery<br>");
    break;
}
}


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
A = [24, 53, 78, 91, 12]
var largest= 0;
for (i=0; i<=largest;i++){
    if (A[i]>largest) {
        var largest=A[i];
    }
}
document.write(largest+"<br>");


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

A = [24, 53, 78, 91, 12]
var smallest=91;
for (i=0; i<=smallest;i++){
    if (A[i]<smallest) {
        var smallest=A[i];
    }
}
document.write(smallest+"<br>");


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(i=1;i<=100;i++)
{
    if(i%5==0){
        document.write(i+",");
    }
}




















