'use strict';
/*
How Much is True?

Create a function which returns the number of true values there are in an array.
Examples

countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

Notes

    Return 0 if given an empty array.
    All array items are of the type bool (true or false).
*/

const countTrue = function (arrOfBool) {
  if (typeof arrOfBool === 'object') {
    if (arrOfBool.every(el => typeof el === 'boolean')) {
      const trueArr = arrOfBool.filter(el => el === true);
      return trueArr.length;
    } else {
      console.log(
        'Type of all data you passed in array is not boolean!! Try again'
      );
    }
  } else {
    console.log('Type of data you passed in function is not array!! Try again');
  }
};
// console.log(countTrue([true, false, false, true, false]));

/*
Which Generation Are You?

Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

    If the number is negative, return the related ancestor.
    If positive, return the related descendant.
    You are generation 0. In the case of 0 (male or female), return "me!".

Examples

generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"

Notes

Check the Resources tab for helpful hints.
Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
*/

const generation = function (gennaration, gender) {
  const genObj = {
    0: 'me',
    1: gender === 'm' ? 'son' : 'daughter',
    2: gender === 'm' ? 'grandson' : 'granddaughter',
    3: gender === 'm' ? 'great grandson' : 'great granddaughter',
    '-1': gender === 'm' ? 'father' : 'mother',
    '-2': gender === 'm' ? 'grandfather' : 'grandmother',
    '-3': gender === 'm' ? 'great grandfather' : 'great grandmother',
  };

  return genObj[gennaration];
};

// console.log(generation(3, 'f'));

/*

Function Factory

Create a function that takes a "base number" as an argument. 
This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

Please check the examples below for a clearer representation of the behavior expected.
Examples

// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15

Notes

All inputs will be valid numbers.
*/

const makePlusFunction = function (baseNum) {
  const newFunc = function (newNum) {
    return baseNum + newNum;
  };

  return newFunc(-8);
};

// console.log(makePlusFunction(5));

/*
Converting Objects to Arrays

Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
Examples

toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []

Notes

Return an empty array if the object is empty.
*/

const toArray = function (object) {
  return Object.entries(object);
};

// console.log(toArray({ a: 1, b: 2 }));

/*

Convenience Store

Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. 
Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) 
should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false

changeEnough([0, 0, 20, 5], 0.75) ➞ true

changeEnough([30, 40, 20, 5], 12.55) ➞ true

changeEnough([10, 0, 0, 50], 3.85) ➞ false

changeEnough([1, 0, 5, 219], 19.99) ➞ false

Notes

    quarter: 25 cents / $0.25
    dime: 10 cents / $0.10
    nickel: 5 cents / $0.05
    penny: 1 cent / $0.01
*/

const changeEnough = function (change, amountDue) {
  const quarter = 0.25;
  const dime = 0.1;
  const nickel = 0.05;
  const penny = 0.01;
  const changeLeft =
    quarter * change[0] +
    dime * change[1] +
    nickel * change[2] +
    penny * change[3];

  if (changeLeft >= amountDue) {
    return `${true} ${changeLeft} is greater than ${amountDue} so you can pay for item`;
  } else {
    return `${false} ${changeLeft} is less than ${amountDue} so you can't pay for item`;
  }
};

// console.log(changeEnough([10, 0, 0, 50], 3.85));

/*
Array of Multiples

Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
Examples

arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

Notes

Notice that num is also included in the returned array.

*/

const arrayOfMultiples = function (num, length) {
  if (num > 0) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push((i + 1) * num);
    }
    return array;
  } else {
    return 'Number must be positiv!!Try Again';
  }
};
console.log(arrayOfMultiples(17, 6));
