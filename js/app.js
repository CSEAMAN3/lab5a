"use strict";
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) {
  const mySum = a + b;
  const myString = `The sum of ${a} and ${b} is ${mySum}.`;

  return [mySum, myString];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  const multiply = a * b;
  let myString = `The product of ${a} and ${9} is ${multiply}.`;
  return [multiply, myString];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) {
  const sumAB = sum(a, b)[0];
  const sumABC = sum(sumAB, c)[0];
  const mySumString = `${a} and ${b} and ${c} sum to ${sumABC}.`;

  const multiplyAB = multiply(a, b)[0];
  const multiplyABC = multiply(multiplyAB, c)[0];
  const myMultiplyString = `The product of ${a} and ${b} and ${c} is ${multiplyABC}.`;

  return [sumABC, multiplyABC, mySumString, myMultiplyString];
}
sumAndMultiply(4, 7, 5);

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
let testArray = [2, 3, 4];

function sumArray(sumArr) {
  const sumItems12 = sum(sumArr[0], sumArr[1])[0];
  const sumItems123 = sum(sumItems12, sumArr[2])[0];

  return [
    sumItems123,
    `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${sumItems123} is their sum.`,
  ];
}
// Here is the test for sumArray(); uncomment it to run it
testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
  const multiplyItems12 = multiply(multArr[0], multArr[1])[0];
  const multiplyItems123 = multiply(multiplyItems12, multArr[2])[0];

  return [
    multiplyItems123,
    `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${multiplyItems123}.`,
  ];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) {
  //dynamicArray is equal to testDynamicArray
  // create two empty variables that will firstly represent the numbers from the array once looped and another that will represent the numbers in the final string.
  let myNum;
  let myNumString = "";
  // create a for loop
  for (let i = 0; i < dynamicArray.length; i++) {
    // create an if statement with the condition i === 0 meaning the first time it loops.
    if (i === 0) {
      myNum = dynamicArray[i]; // set my num to equal dynamicarray[i] the number in the array!
      myNumString += dynamicArray[i]; //set the myNumString variable to concatinate dynamicArray[i]
    } else {
      // start your else statement, this will represent if [i] > 0 as the first condition is only if i === 0
      myNum = multiply(myNum, dynamicArray[i])[0]; // myNum is now equal to the multiply function with the first argument equal to myNum which was dynamicArray[0] and the second argument as the dynamicArray[i] your currentyly looping through.
      myNumString += "," + dynamicArray[i]; // this now takes  myNumString and concatenates it to the new dynamicArray[i]
    }
  }
  return [myNum, `The numbers ${myNumString} have a product of ${myNum}.`];
  // return [product of those numbers, "The numbers 1,2,3,4,5 have a product of 120."]
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
