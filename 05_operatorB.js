
console.log(`1. -------------------------`);
function greaterNumber(num1, num2){
    var result = num1 > num2 ? `Greater number is: ${num1}` : `Greater number is: ${num2}`;
    console.log(`Greater number of ${num1} and ${num2} is ==>  ${result}`);
}
greaterNumber(10,-10)
greaterNumber(800, 899)

console.log(`2. -------------------------`);
function isEvenOrOddNum(num){
    var result = num%2 == 0 ? "given number is even" : "given number is odd";
    console.log(`Given number is ${num} ==> ${result}`);
}

isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`3. -------------------------`);

function wordLength(stringvar){
var wordlen = stringvar.length;
var result = wordlen % 2 == 0 ? `given word lenght is ${wordlen} ==>Even ` :  `given word lenght is ${wordlen} ==>Odd `;
console.log(`Given word is: ${stringvar}: ${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");