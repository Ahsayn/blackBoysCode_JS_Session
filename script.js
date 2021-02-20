/*   Welcome to your JavaScript file - Where you give your webpage "brains"
    This is a comment. Comments are notes that you add to your code 
    to make it easier to understand what your program does.
*/

// This is another comment, but it can only be written on one line

/* VARIABLES - All the information that your program will use goes here
Variables come in different TYPES. below are some examples
*/

// These variables are NUMBERS
let myNumber = 5;
let mySecondNumber = 10
let dozen = 12;
let apples = 13;
let myAge = new Number();

// These variables are STRINGS (as in strings of letters)
let myString = "Hey there!";
let firstName = "";
let lastName = "";

// These variables are BOOLEANS (booleans are used to remember if something is true or false)
let isSnowyDay = true;
let isWinter = true;
let applesFinished = false;

// These variables are OBJECTS IN OUR WEBPAGES. 

// These can be Elements such as H1, H2 , H3, p, ul, li a, etc.
let myMainHeadings = document.getElementByTagName("h1"); // This selects all the items with <h1>Stuff inside</h1>
let mySubHeadings = document.getElementByTagName("h2"); // This selects all the items with <h2>Stuff inside</h2>
let allParagraphs = document.getElementByTagName("p"); // This selects all the items with <p>Stuff inside</p>
let myLists = document.getElementByTagName("ul"); // selects all bulletted lists <ul>.... </ul>

//Or items with an ID name
let myHomePageTitle =  document.getElementById("home_title");
let myPageBackground =  document.getElementById("bg");
let myParagraph =  document.getElementById("myParagraph");
let myButton = document.getElementById("buttonA");

// Or items with a class name
let myInstructions = document.getElementsByClassName("instructions"); 

//--------------------------------------------------------------------

// Writing Programs

/* After you have created variables for all the things that your program needs to know or remember,
   you can start writing your programs (instructions for what you want your program to do)
   Remember that in JavaScript, we put a semicolon at the end of each instruction.
*/

/* Let's Start by using our variable called myParagraph. 
   We are going to change some of its properties.
*/

document.getElementById("myParagraph").innerHTML = "hello world!"; 

// We can write instructions to change our variables
myNumber = 100;
isSnowyDay = true;

//--------------------------------------------------------------------

/* We can also group our instructions into FUNCTIONS
   Functions are groups of instructions we put together to accomplish a task
   When we tell a program to carry out a function, it performs all the instructions inside
*/

// Function to Add 2 numbers
function addNumbers() {
  let result = dozen + apples; // add the 2 numbers
  document.getElementById("resultHeading").innerHTML = result; 
}

