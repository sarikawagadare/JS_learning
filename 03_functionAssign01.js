console.log("Step1.function with no arguments and no retrurn type");
console.log("    1. function----");
function jsDatatype1(){
    console.log("      Primitive data type:Number, String , Boolean");
}
jsDatatype1();

console.log("    2. function----");
function jsDatatype2(){
    console.log("     Non-Primitive data type:Object, Array");
}
jsDatatype2();

console.log("Step2.personalDetails with arguments namely firstName, lastName, collegeName ");
function personalDetails(firstName,lastName,collegeName){
    console.log("    First Name is:",firstName);
    console.log("    Last Name is:",lastName);
    console.log("    College Name is:",collegeName);
}
personalDetails("Sarika","Pathare","G.H.Raisoni");

console.log("Step3.function with two args and swap the passed values and log on console");
    function swapValues(val1,val2){
    
        console.log("      ==Before Swap==");
        console.log("     ",val1, " ",val2);
        var temp=val1;
        var val1=val2;
        var val2=temp;
        console.log("      ==After Swap==");
        console.log("     ",val1, " ",val2);
       
    }
    swapValues("Virat","Anushka");
    swapValues(1000,2000)

console.log("Step4.WAF with 3 parameters or arguments and it should log the addition");    

function addThreeValues(val,val2,val3){
   var Answer=val+val2+val3;
 console.log("      value1=",val);  
 console.log("      value2=",val2);
 console.log("      value2=",val3);
 console.log("      Adding three values:",Answer);
}

addThreeValues(10.23, 600, 40);
addThreeValues("Hello"," Good"," Morning");

console.log("revert commit github");