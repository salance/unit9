// Name: Sean Lance
// CS 81 Unit 9 Assignment
// Filename: unit9problem1.js used with unit9problem1.html

/* Unit 9 | Problem #1:
   Write a JavaScript program to highlight the bold words of the following
   paragraph by changing the text color to red, on mouse over.
   We have just started this section for the users (beginner to intermediate)
   who want to work with various JavaScript problems and write scripts online
   to test their JavaScript skill.

   Hint: wordItems = document.getElementsByTagName('strong');
   // The paragraph uses <strong></strong> tags for the bold words.
      Change <strong> default behavior.
*/

//Declare and initialize array variable to hold each html <strong> element value
var wordItems = document.getElementsByTagName('strong');

// use for-loop to assign mouseover event listener to each item in the list
for(var i=0; i<wordItems.length; i++) {
  wordItems[i].addEventListener("mouseover", function( event ) {

    // Change html target element to color red onmouseover
    event.target.style.color = "red";

    // Short time delay after mouseover before resetting the html element color
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
}//end for-loop
