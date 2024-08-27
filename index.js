// String Manipulation Functions:

// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example:
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


// Count Characters
function countCharacters(str) {
    return str.length;
}

// Example:
console.log(countCharacters("hello")); // Output: 5
console.log(countCharacters("JavaScript")); // Output: 10



// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example:
console.log(capitalizeWords("hello world")); // Output: "hello world"
console.log(capitalizeWords("javaScript is fun")); // Output: "javaScript is fun"






// Array Functions:

// These functions find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}

// Examples:
const numbers = [3, 1, 7, 9, 2, 5];
console.log(findMax(numbers)); // Output: 9
console.log(findMin(numbers)); // Output: 1


// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Examples:
const numbers2 = [3, 1, 7, 9, 2, 5];
console.log(sumArray(numbers2)); // Output: 27


// Filter Array Based on a Condition

// Function to filter elements from an array based on a condition
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Example condition function: Filter out even numbers
function isOdd(num) {
    return num % 2 !== 0;
}

// Example:
const numbers3 = [3, 1, 7, 9, 2, 5];
console.log(filterArray(numbers3, isOdd)); // Output: [3, 1, 7, 9, 5]

// Example condition function: Filter out numbers greater than 4
function greaterThanFour(num) {
    return num > 4;
}

console.log(filterArray(numbers3, greaterThanFour)); // Output: [7, 9, 5]






// Mathematical Functions:

// Factorial:

// Function to calculate the factorial of a given number
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Examples:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(7)); // Output: 5040



// Prime Number Check:

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Examples:
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(17)); // Output: true


// Function to generate Fibonacci sequence up to a given number of terms
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

// Examples:
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(1));  // Output: [0]