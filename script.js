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

console.log(generation(3, 'f'));
