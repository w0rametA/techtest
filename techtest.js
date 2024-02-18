// Sum Of Two in Array (Easy)
// Task: Implement a JavaScript function that, given an array of integers and a target integer, returns whether any two integers in the array sum up to the target number.
// Example: 
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true.
// Input: [12, 17, 14, 11, 19, 8], Target: 30 Output: false.
// Evaluation Criteria: Efficient search algorithms, possibly the use of hash maps (objects in JavaScript) for quicker lookup, and understanding of array operations.

// const sumOfTwoinArr = (arr, num ) => {
//     const target = num 
//     let firstNum
//     let secondNum
//     for(let i = 0; i <= arr.length ; i++){
//       firstNum = arr[i]
//       for(let j = i+1 ; j < arr.length; j++){
//         secondNum = arr[j]
//         if(firstNum + secondNum === target) return true
//       }
//     }
//     return false
//   }
// console.log(sumOfTwoInArr([1, 3, 5, 7, 16, 4], 4))

// Custom Sort Function (Easy)
// Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places all odd numbers before even numbers.
// Example: 
// Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
// Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].
// Evaluation Criteria: Ability to customize sorting logic, understanding of array methods, and algorithm efficiency.

// const customSort = (arr) => {
//     const fromSmalltoBig = arr.sort((a,b) => {
//         return a - b;
//     })
//     const oodFirst = []
//     fromSmalltoBig.map((item) => {
//         if(item % 2 !== 0){
//             oodFirst.push(item)
//         }
//     })
//     const result = [...oodFirst]
//     fromSmalltoBig.map(item => {
//         if(item % 2 === 0){
//             result.push(item)
//         }
//     })
//     return result
// }

// console.log(customSort([25, 40, 14, 91, 31, 22, 49, 13, 6]))

// Largest Number: (Medium)
// Task: Given a list of non-negative integers, arrange them such that they form the largest possible number.
// Example
// Input: [10, 2, 13, 7], Output: "721310".
// Input: [21, 36, 8, 45], Output: “8453621”
// Evaluation Criteria: Understanding of sorting algorithms, custom comparators, and string manipulation.

// const makeLargest = (arr) => {
//     const store = []
//     const storeString = []
//     const storeDigit = []
//     const stringDigit = []
//     arr.map(item => {
//         store.push(item.toString())
//     })
//     store.map(item => {
//         storeString.push(...(item.split("")))
//     })
//     storeString.map(item => {
//         storeDigit.push(Number(item))
//     })
//     storeDigit.sort((a,b) => {
//         return b - a
//     })
//     storeDigit.map(item => {
//         stringDigit.push(item.toString())
//     })
//     return stringDigit
// }

// console.log(makeLargest([10, 2, 13, 7]))

// Sum of All Primes: (Easy)
// Task: Write a JavaScript function that takes a number n and returns the sum of all prime numbers up to and including n.
// Example: 
// Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
// Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7….. To 59).
// Evaluation Criteria: Understanding of prime number generation and optimization techniques.
 
const sumAllPrimes = (num) => {
    for(let i = 0 ; i <= num ; i++){
        console.log(i)
        if(arr[i] % arr[i] === 0 && arr[i] % 1 )
    }
}


console.log(sumAllPrimes(10))

