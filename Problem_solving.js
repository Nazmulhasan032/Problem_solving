// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (inputStr) => {
    let newStr = "";
    for (let i = inputStr.length - 1; i >= 0; i--) {
        newStr += inputStr[i];
    }
    return newStr;
}
var output = reverseString('Hello world');
console.log(output);



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 


const SumOfArray = (Numbers) => {
    let newNumber = 0;
    for (i = 0; i <= Numbers.length; i++) {
        if (Numbers[i] > 0) {
            newNumber += Numbers[i];
        }
    }
    return newNumber;

}
let Numbers = [2, -5, 10, -3, 7]
var output = SumOfArray(Numbers);
console.log(output);



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findMostFrequentElement = (arr) => {
    const frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    }

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in frequencyMap) {
        if (frequencyMap[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequencyMap[element];
        }
    }
    return parseInt(mostFrequentElement);
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output = findMostFrequentElement(arr);
console.log(output);




// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbers = (array, target) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j];
            }
            if (array[i] + array[j] > target) {
                break;
            }
        }
    }
    return null;
}
const array = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output = findTwoNumbers(array, targetValue);
console.log(output);





// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            console.log("Division by zero is not allowed.");
        }
    } else {
        console.log("Please use one of +, -, *, or /");
    }
}

const num1 = 10;
const num2 = 5;
const operator = '-';
const output = calculator(num1, num2, operator);
console.log(output);




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[{]}|;:,<.>/?"';

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}
const passwordLength = 12;
const output = generateRandomPassword(passwordLength);
console.log(output);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


const romanToInteger = (romanNumeral) => {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentChar = romanNumeral[i];
        const currentValue = romanNumerals[currentChar];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

const romanNumeral = 'IX';
console.log(romanToInteger(romanNumeral));



// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (array) => {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of array) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    return secondSmallest;
}

const numbers = [7, 2, 5, 1, 8, 3];
const output = findSecondSmallest(numbers);
console.log(output);
