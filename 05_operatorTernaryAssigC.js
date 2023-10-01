 
 function maleMarriageEligibility(gender,age,boyName){
   var res = gender=="Male" && age>=21? `Hey ${boyName} you are eligible for Marriage` : `Hey ${boyName} you are Not eligible for Marriage`;
   
//    console.log(res);
   return res;  
 }

 var answer=maleMarriageEligibility("Male",25,"Billgates");
 var answer1=maleMarriageEligibility("Male",17,"Stew Jobs");
 console.log(`--------------Step1-------------------`);
console.log(answer);
console.log(answer1);

function femaleMarriageEligibility(gender,age,girlName){
 var answer = gender=="Female" && age>=18 ? `Hey ${girlName} you are eligible for Marriage`:
                                          `Hey ${girlName} you are not eligible for Marriage`;

                        return answer;
}

var result= femaleMarriageEligibility("Female",16, "Jenifer");
var result1=femaleMarriageEligibility("Female",27, "Malinda Gates");
console.log(`--------------Step2-------------------`);
console.log(result);
console.log(result1);