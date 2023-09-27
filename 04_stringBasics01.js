
function stringBasics(hobby1,hobby2,hobby3){
  console.log("==============Step1==================");  
  console.log("My Dream Company is : Capgemini");
  console.log("===============Step2.1=================");
  console.log("My Hobbies Are:",hobby1,hobby2,hobby3);
  console.log("===============Step2.2=================");
//    var hobbychar = hobby1+hobby2+hobby3;
   var hobbychar = hobby1.concat(hobby2).concat(hobby3)
   var result = hobbychar;
   console.log("total char of hobby= ",hobbychar);
   console.log("total number of char= ", result.length);
}

stringBasics("Swimming","playing","Cooking");