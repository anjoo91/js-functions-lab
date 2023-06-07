//1.(completed below Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  
  //2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
  function maxOfThree(num1, num2, num3) {
    // assuming num1 is largest
      let maxNum = num1;
    // if num2 is larger than num1, take num2 as maxNum
      if (num2 > maxNum) {
          maxNum = num2;
      }
    // if num3 is larger than num2 or num1, take num3 as maxNum
      if (num3 > maxNum) {
          maxNum = num3;
      }
      return maxNum;
  }
  
  console.log(maxOfThree(-12,10,12));
  
  
  //3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
  
  function isCharAVowel(input) {
    //creating string of vowels
    const vowels = "aeiou";
    //forcing input to lower case
    let x = input.toLowerCase();
    //checking if input is in the vowel string
    if (vowels.indexOf(x) >= 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(isCharAVowel("e"));
  console.log(isCharAVowel("d"));
  
  
  //4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
  
  const sumArray = function(numArray) {
    let total = 0;
    //iterate through numArray & add to total
    for(let i = 0; i < numArray.length; i++) {
      total += numArray[i]
    }
    return total;
  }
  
  console.log(sumArray([2,4,5]));
  
  //5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  
  function multiplyArray(numArray) {
    let product = 1;
    //iterate through numArray & multiply together
      for(let i = 0; i < numArray.length; i++) {
      product = product * numArray[i];
    }
    return product;
  }
  
  console.log(multiplyArray([2,4,5]));
  
  //6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
  
  const numArgs = function(...args) {
    return args.length;
  }
  
  console.log(numArgs(1,2));
  console.log(numArgs("a","b","c","d","e"));
  
  //7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string “ratskcor”.
  
  
  function reverseString(x) {
    //split string into array of characters
    xArray = x.split("");
    //reverse array
    reversedArray = xArray.reverse();
    //convert reversed array to string
    reversedString = reversedArray.join("");
    //convert string to uppercase
    return reversedString;
  }
  
  // or //
  
  function reverseString(x) {
    let reversedString = '';
    //iterate through string backwards & add the letters back in
    for(let i = x.length - 1; i >= 0; i--) {
      reversedString += x[i];
    }
    return reversedString;
  }
  
  console.log(reverseString('rockstar'));
  
  //8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
  
  const longestStringInArray = function(xArray) {
    let maxLength = 0;
    //iterate through array to see which element is longest
    for(let i = 0; i < xArray.length; i++) {
      if (xArray[i].length > maxLength) {
        maxLength = xArray[i].length;
      }
    }
    return maxLength
  }
  
  console.log(longestStringInArray(['hello','world','planet','hahahahaha']));
  
  //9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
  
  function stringsLongerThan(xArray, num1) {
    let result = [];
    //iterate through array to see which element is longer than num1; append the elements to result
    for(let i = 0; i < xArray.length; i++) {
      if (xArray[i].length > num1) {
        result.push(xArray[i]);
      }
    }
    return result;
  }
  
  console.log(stringsLongerThan(['say','hello','in','the','morning'], 3));