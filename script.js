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
// console.log(arrayOfMultiples(17, 6));

/*

Return the Objects Keys and Values

Create a function that takes an object and returns the keys and values as separate arrays. 
Return the keys sorted alphabetically, and their corresponding values in the same order.
Examples

keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]

Notes

Remember to sort the keys.

*/

const keysAndValues = function (object) {
  const array = [];
  const keys = Object.keys(object);
  const values = Object.values(object);
  keys.sort();
  values.sort((a, b) => a - b);
  array.push(keys, values);

  return array;
};

// console.log(keysAndValues({ b: 'Apple', a: 'Microsoft', c: 'Google' }));
/*

Fix the Error: Value vs. Reference Types

Create a function that returns true if two arrays contain identical values, and false otherwise.

To solve this question, your friend writes the following code:

function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
  return true
 } else {
  return false
 }
}

But testing the code, you see that something is not quite right. Running the code yields the following results:

checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...

checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?

Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:
Examples

checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

checkEquals([4, 7, 6], [4, 6, 7]) ➞ false

Notes

Hint: This has to do with value vs. reference types.

*/

const checkEquals = function (arr1, arr2) {
  return arr1.every((el, i) => el === arr2[i]);
};

// console.log(checkEquals([4, 5, 6], [4, 8, 6]));

/*

Basic Calculator

Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
Examples

calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2

Notes

If the input tries to divide by 0, return: "Can't divide by 0!"

*/

const calculator = function (num1, operator, num2) {
  let result;

  operator === '+' ? (result = num1 + num2) : null;
  operator === '-' ? (result = num1 - num2) : null;
  operator === '*' ? (result = num1 * num2) : null;
  operator === '/' ? (result = num1 / num2) : null;
  num1 === 0 || num2 === 0 ? (result = "Can't divide by 0!") : null;

  return result;
};

// console.log(calculator(4, '/', 2));

/*

Learn Lodash (2): Compact

According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
Examples

compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

Notes

    Do not attempt to import lodash; you are simply writing your own version.
    This entire series of challenges can be found here.

*/

const compact = function (arr) {
  let newArr = arr.filter(el => el);

  return newArr;
};

// console.log(compact([0, 1, false, 2, '', 3]));

/*

Reverse Words in a String

Given an input string, reverse the string word by word, the first word will be the last, and so on.
Examples

reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a"

Notes

    A word is defined as a sequence of non-space characters.
    The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
    You need to reduce multiple spaces between two words to a single space in the reversed string.
    Try to solve this in linear time.

*/

const reverseWords = function (string) {
  const strToArr = string
    .split(' ')
    .reverse()
    .filter(el => el)
    .join(' ');
  return strToArr;
};

// console.log(reverseWords('hello   world!  '));

/*

Finding Nemo

You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".
Examples

findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

findNemo("Nemo is me") ➞ "I found Nemo at 1!"

findNemo("I Nemo am") ➞ "I found Nemo at 2!"

Notes

    ! , ? . are always separated from the last word.
    Nemo will always look like Nemo, and not NeMo or other capital variations.
    Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
    If there are multiple Nemo's in the sentence, only return the first one.

*/

const findNemo = function (str) {
  const toArr = str.split(' ');
  const indexOfNemo = toArr.indexOf('Nemo');

  if (indexOfNemo >= 0) {
    return `I found Nemo at ${indexOfNemo}!`;
  } else {
    return "I can't find Nemo :(";
  }
};

// console.log(findNemo('I am finding  !'));

/*

Find the Discount

Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.

Alternative Text
Examples

dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25

Notes

Your answer should be rounded to two decimal places.

*/

const discount = function (price, discount) {
  const discountToDecimal = discount / 100;
  // console.log(discountToDecimal);
  const priceWithDiscont = price * discountToDecimal;

  // console.log(priceWithDiscont);
};

// console.log(discount(100, 75));

/*

25-Mile Marathon

Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

Return true if the marathon is 25 miles long, otherwise, return false.
Examples

marathonDistance([1, 2, 3, 4]) ➞ false

marathonDistance([1, 9, 5, 8, 2]) ➞ true

marathonDistance([-6, 15, 4]) ➞ true

Notes

    Items in the array will always be integers.
    Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
    Return false if the arguments are empty or not provided.

*/

const marathonDistance = function (arr) {
  let sumOfArr = 0;
  const noNegativs = arr
    .map(el => Math.abs(el))
    .forEach(element => (sumOfArr += element));

  if (sumOfArr === 25) {
    return true;
  } else {
    return false;
  }
};

// console.log(marathonDistance([-6, 15, 4]));

/*

Total Volume of All Boxes

Given an array of boxes, create a function that returns the total volume of all those boxes combined together. 
A box is represented by an array with three elements: length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.
Examples

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1

Notes

    You will be given at least one box.
    Each box will always have three dimensions included.
*/

function totalVolume(...boxes) {
  const boxesCombined = [];
  let totalVolume = 0;
  for (let index = 0; index < boxes.length; index++) {
    const [one, two, three] = boxes[index];
    boxesCombined.push(one * two * three);
  }

  boxesCombined.forEach(num => (totalVolume += num));

  return totalVolume;
}

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));

/*

Mirror Array

Given an integer array, transform that array into a mirror.
Examples

mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

Notes

Do not repeat the last item of the given array.

*/

const mirror = function (arr) {
  const copyArr = [...arr];
  const revArr = arr.reverse();
  revArr.shift();
  copyArr.push(...revArr);

  return copyArr;
};
// console.log(mirror([0, 2, 4, 6]));

/*

Let's Sort This Array!

Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

    "Asc" returns a sorted array in ascending order.
    "Des" returns a sorted array in descending order.
    "None" returns an array without any modification.

Examples

ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]
*/

const ascDesNone = function (arr, order) {
  if (order === 'Asc') {
    return arr.sort((a, b) => a - b);
  } else if (order === 'Des') {
    return arr.sort((a, b) => b - a);
  } else if (order === 'None') {
    return arr;
  }
};

// console.log(ascDesNone([7, 8, 11, 66], 'Des'));

/*

Match the Last Item

Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
Examples

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

Notes

The array is always filled with items.

*/

const matchLastItem = function (arr) {
  const arrToStr = arr.map(el => String(el));
  const lastItem = arrToStr.pop();
  const joinedItems = arrToStr.join('');

  if (lastItem === joinedItems) {
    return true;
  } else {
    return false;
  }
};

// console.log(matchLastItem([8, 'thunder', true, '8thundertrue']));

/*

Find NaN in an Array

Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.
Examples

findNaN([1, 2, NaN]) ➞ 2

findNaN([NaN, 1, 2, 3, 4]) ➞ 0

findNaN([0, 1, 2, 3, 4]) ➞ -1

Notes

NaN will occur in the input array only once.

*/

const findNaN = function (arr) {
  let newArr = [];
  arr.forEach(el => newArr.push(String(el)));
  return newArr.indexOf('NaN');
};

// console.log(findNaN([0, 1, 2, 3, 4]));

/*

Get Sum of People's Budget

Create the function that takes an array with objects and returns the sum of people's budgets.
Examples

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600

*/

const getBudgets = function (arr) {
  let sumOfBudget = 0;
  arr.forEach(el => (sumOfBudget += el.budget));

  return sumOfBudget;
};

getBudgets([
  { name: 'John', age: 21, budget: 23000 },
  { name: 'Steve', age: 32, budget: 40000 },
  { name: 'Martin', age: 16, budget: 2700 },
]);

/*
Is Johnny Making Progress?

To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
Examples

progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

progressDays([10, 11, 12, 9, 10]) ➞ 3

progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

progressDays([9, 9])  ➞ 0

Notes

Running the same number of miles as last week does not count as a progress day.
*/

const progressDays = function (arr) {
  let progressCount = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < arr[index + 1]) {
      progressCount += 1;
    }
  }

  return progressCount;
};

// console.log(progressDays([10, 11, 12, 9, 10]));

/*

Purge and Organize

Given an array of numbers, write a function that returns an array that...

    Has all duplicate elements removed.
    Is sorted from least to greatest value.

Examples

uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]

*/

const uniqueSort = function (arr) {
  const removedDuplicateSort = arr
    .filter((el, i) => arr.indexOf(el) === i)
    .sort();

  return removedDuplicateSort;
};

// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2, 5, 5, 5, 5, 8, 8, 8, 8]));

/*

Seven Boom!

Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

*/

const sevenBoom = function (arr) {
  const newArr = [];
  arr.forEach(el => newArr.push(String(el)));
  const stringJoined = newArr.join('');
  if (stringJoined.includes('7')) {
    return 'Boom!Array contains the number seven.';
  } else {
    return 'there is no 7 in the array';
  }
};

// console.log(sevenBoom([2, 55, 60, 79, 86]));

/*

Number of Boomerangs

A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:

[3, 7, 3], [1, -1, 1], [5, 6, 5]

Create a function that returns the total number of boomerangs in an array.

To illustrate:

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

Examples

countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

Notes

[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.
*/

const countBoomerangs = function (arr) {
  let boomerangsCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      boomerangsCount += 1;
    }
  }

  return boomerangsCount;
};

// console.log(countBoomerangs([5, 5, 5, 5, 5, 5, 5, 5]));

/*

Oddish vs. Evenish

Create a function that determines whether a number is Oddish or Evenish. 
A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
Examples

oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

*/
