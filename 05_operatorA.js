function squareOfWordLength(str){
  var strlenght = str.length;  
  console.log(` 1.1  Given string is : ${str}`);
  console.log(` 1.2  length of given string is: ${strlenght}`);
  var lenghtsqr = strlenght * strlenght;
  console.log(` 1.3  length square is : ${lenghtsqr}`);
  console.log(`-----------------------------------------------------------------------------`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`2.1  string length and divide by total number words available in that string. Log the result on console.`);
function secondFunction(){
 var string = "I am Angular Developer"
 var words = string.split(" ");
 var strlenght = string.length;
 var wordslen = words.length;
 console.log(`     string length of given string is: ${strlenght}`);
 console.log(`     total number words available in string :${wordslen}`);
 var result = strlenght / wordslen;
 console.log(`     string length and divide by total number words available in that string: ${result}`);
 console.log(`-----------------------------------------------------------------------------`);

 var mult = strlenght * wordslen;
 console.log(`2.2   string length and multiple by the total words available in string is : ${mult}`);

}
secondFunction()