
function stringTemplateAssign(){
    var dreamcompany = '"Google"';
    console.log("--------step-1--------");
 console.log(`My Dream Company is: ${dreamcompany}`);

 console.log("--------step-2.1--------");
  var hobby1 = "playing ";
  var hobby2 = "Swimming ";
  var hobby3 = "learning new things";

console.log(`My Hobbies Are : "${hobby1}" ,"${hobby2}" ,"${hobby3}"`);
var strhobby = hobby1.concat(hobby2).concat(hobby3);
console.log("--------step-2.2--------");
console.log(`Conctatination of Hobbies: ${strhobby}`);
}

stringTemplateAssign();