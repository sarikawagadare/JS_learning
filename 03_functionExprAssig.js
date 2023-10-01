
var sqrOfnum = function squareOfnNmber(num){
  var sqr = num * num;
  console.log(`Square of ${num}= ${sqr}`);
}
console.log(`............step1.........`);
sqrOfnum(5);
sqrOfnum(6);
sqrOfnum(25);
sqrOfnum(100);
sqrOfnum(67);
sqrOfnum(89);
sqrOfnum(59);
console.log(`............step2.........`);
var typefun = typeof(sqrOfnum);
console.log(`type of function is : ${typefun}`);

console.log(`............step3.........`);
var arearect = function areaOfRectangle(lenght, width){
var area = lenght * width;
console.log(`Area of Rectangle plot is : ${area}`);
}
arearect(499, 917);

console.log(`............step4.1.........`);
 
var swapValues = function swanump(value1, value2){
   
        console.log(`Value of After swap: ${value1}  ${value2}`);

        var temp = value2;
        var value2 = value1 
        var value1 = temp;
    
        console.log(`Value of After swap: ${value1}  ${value2}`);
        console.log(`............................`);
     }

swapValues("Mahi","Raina");
swapValues(55 , 77);

console.log(`............step5.........`);

var stroperation = function strOper(){
  var string = "JS the most popular language of internet";
  console.log(`Given String Is : ${string}`);
  var totalchar = string.length;
  console.log(`............step5.a.........`);
  console.log(`Find the total character available in the string is: ${totalchar}`);
  console.log(`............step5.b.........`);
  var charat = string.charAt(6);
  console.log(`character at index 6 is: ${charat}`);
  console.log(`............step5.c.........`);
  var charat = string.charAt(11);
  console.log(` character at index 11 is: ${charat}`);
  console.log(`............step5.d.........`);
  var lastchar = string.charAt(string.length-1);
  console.log(` last character using length property: ${lastchar} `);
  console.log(`............step5.e.........`);
  var firstchar = string.charAt(0) 
  console.log(`first character from the given stringis : ${firstchar} `);
  console.log(`............step5.f.........`);
  var thirdlastchar = string.charAt(string.length-3);
  console.log(` third last character from the given string is : ${thirdlastchar}`);
  console.log(`............step5.g.........`);
  var words = string.trim();
  var wordslern = words.length;
  console.log(`total number of words of the given string is : ${wordslern}`);
  console.log(`............step5.g.........`);
  var squarword = wordslern * wordslern;
  console.log(`square of total number words of the given string : ${squarword}`);
}

stroperation();