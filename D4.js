/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function(length,width){

    let total = length * width
    return total
}

console.log(area(11,12))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

const crazySum = function(integer1, integer2){
    let sum = integer1 + integer2
    if(integer1 === integer2){
        //if integer1 value is equal to integer2 value then return the value of (integer1 + inetegr2)*3
        return sum * 3
    }
    else{
        //if integer1 is not equal to integer2 then return (inetegr1 + integer2)
        return sum
    }
}

console.log(crazySum(2,2))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(number){
    let Difference = number - 19
    let absoluteDifference = Math.abs(Difference)
    //Math.abs() with always give us a positive value even if the result is negative i.e |2-5| = 3 not -3
    if(number > 19){
        return absoluteDifference * 3
    }
    else{
        return absoluteDifference
    }
}

console.log(crazyDiff(1));

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n){

    if((n > 20 && n<=100) || n === 400){
        //if integer n is a number between 20 and 100 return true. Also return true when n = 400. As in the question stated that 20 and 100 so && is an AND operator and || is an OR operator
        return true
    }
    else{
        return false
    }
}

console.log(boundary(10))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

const strivify = function(string){
     
    let firstWord = string.split(" ")[0]
    //.split(" ") will make our string of sentence into an array of words
    //.split(" ")[0] will give us the first index of that array
    //so our firstWord is storing an array of index 0

    if(firstWord === 'Strive'){
        /* if the index[0] of array which is first word of the sentence equal to strive then write the
        as it is */
        return string
    }
    else{

      //if the first word which is index[0] of array is not Strive, Then add strive at position 0 of array
        return `Strive ${string}`
    }

}

console.log(strivify('Strive School is the best!!!'))


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function(positiveNumber){

    let multipleOf3 =  positiveNumber % 3 
    //6/3 = 0, so 6 is a multiple of 3 because the remainder is 0. So if remainder is 0 then it is
    //multiple of 3 else it is not
    let multipleOf7 =  positiveNumber % 7

    if(multipleOf3 === 0 && multipleOf7 === 0){
        //for example 21/3 and 21/7...they both give remainder 0
        return `${positiveNumber} is a multiple of both 3 and 7`
    }
    else if(multipleOf7 === 0){
        return `${positiveNumber} is a multiple of 7`
    }
    else if(multipleOf3 === 0){
        return `${positiveNumber} is a multiple of 3`
    }
    else{
        return `${positiveNumber} is not a multiple of both 3 & 7`
    }
}

console.log(check3and7(21));


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function(reverse){

    //.split('') will split the string into an array of characters
    //.reverse() will reverse the position of all characters
    //.join('') will join the characters now back to string

    let newString = reverse.split('').reverse().join('')
    return newString
}
console.log(reverseString('Strive'));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

    const upperFirst = function(capitalize){
    
    //.split(" ") will split the sentence in an array of words
    let wordArray = capitalize.split(" ")

    for(let i=0; i<wordArray.length; i++){
        //.substr(1) will return all letter except first letter and then will combine with first letter which is not capitalized
        //charAt(0) will give character at index 0
        //wordArray[i] will display word at index i and for each index i word, charAt(0) will display letter of that word at index 0 and .toUpperCase will capitalize this word
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].substr(1)
    }
     return wordArray.join(" ")
     //.join() concatenates the array
}

console.log(upperFirst('my name is rabia'));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (newString) {

        let lastLetter = newString.length - 1
        newString = newString.slice(1, lastLetter)
        //.slice(1, lastLetter) will remove letter at index 0 and letter which is at last index
        return newString
    
}

console.log(cutString('Strive'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){
    
    //declare an empty array to store values later
    let randomArray = []

    
    for(let x=0; x < n; x++){

        //Math.random() returns floating random numbers between 0,1
        //Multiply by 10 will give floating random numbers between 0,10
        //Math.floor() will round the floating number to nearest integer number
        //Math.ceil() can also be used instead of floor. It will round to nearest largest integer
        //.push() adds elements to end of array

    randomArray.push(Math.floor(Math.random() * 10))
        
    }

    return randomArray

}
//as n = 9, we will get 9 random numbers
console.log(giveMeRandom(9));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/