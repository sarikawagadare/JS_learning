

function stringHandsOn(){
 var string = `    Hey you are doing good, keep it up     `;
 var string1 = `    Hey you are doing good, keep it up     `;
 console.log("              -------step1---------");
 console.log(`Given String is :${string}`);
 console.log("              -------step2---------");
 var str1 = `${string.length}`
 console.log(`lenght of the string is : ${str1}`);
 console.log("              -------step3---------");
 var str2 = `${string.trim()}`
 console.log(`After leading and trailing extra spaces :${str2}`);

 console.log("              -------step4---------");
 var strlenght = str1-(str2.length);
 console.log(`After leading and trailing extra spaces lenght is: ${str2.length}`);
 console.log(`extra spaces count that is removed in step 3 : ${strlenght}`);

 console.log("              -------step5---------");
 var firstchar = str2.charAt(0);
 var lastchar = str2.charAt((str2.length)-1);

 console.log(`first char after trim is ${firstchar} and last character after trim is : ${lastchar}`);

 console.log("              -------step6---------");
 var words = str2.split(" ");
console.log(`Total words available in the string after step 3 : ${words}`);
console.log(`Total words counts available in the string after step 3 : ${words.length}`);

console.log("              -------step7---------");
console.log(`index of word “good” from the given string is : ${string.indexOf('good')}`);

console.log("              -------step8---------");
console.log(`substring starting from index 22 using substring() : ${string.substring(22)}`);
console.log(`substring starting from index 22 using slice(): ${string.slice(22)}`);

console.log("              -------step9---------");
console.log(`is string ends with word “up” after step 3 : ${str2.endsWith('up')}`);

console.log("              -------step10---------");
console.log(`is string starts with word “Hey” after trimming : ${str2.startsWith('Hey')}`);
}
stringHandsOn();