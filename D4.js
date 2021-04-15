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
        return sum * 3
    }
    else{
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

    if(firstWord === 'Strive'){
        return string
    }
    else{
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
    let multipleOf7 =  positiveNumber % 7

    if(multipleOf3 === 0 && multipleOf7 === 0){
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

/* const upperFirst = function(capitalize){
    
    //.split(" ") will split the sentence in an array or words
    let wordArray = capitalize.split(" ")

    for(let i=0; i<capitalize.length; i++){
        
        wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substr(1)

        //wordArray[i][0] will give for every array of word it's first character which is at index 0 for every word. 
        //.toUpperCase() will capitalize letter at index 0 which is first letter of each word
        //
    }
    //let firstCapitalLetter = capitalize.charAt(0).toUpperCase() + capitalize.slice(1)
    //return firstCapitalLetter

   let finalWord =  wordArray.join(" ")
   return finalWord
}

console.log(upperFirst('my name is rabia')); */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (newString) {

        let lastLetter = newString.length - 1
        newString = newString.slice(1, lastLetter)
        return newString
    
}

console.log(cutString('Strive'));

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

const giveMeRandom = function(n){
    
    let randomArray = []

    
    for(let x=0; x < n; x++){

    randomArray.push(Math.floor(Math.random() * 10))
        
    }

    return randomArray

}
console.log(giveMeRandom(9));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/