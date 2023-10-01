

 function voteEligiblefun(age){
    if (age== 0 || age<0 || age>130 ) {
        console.log(`Invalid Data`);
    } else
     {
        if (age<18) {
            console.log(` not eligible for vote`);
        } 
        else {
            console.log(` eligible for vote `);
        }
    }
}
voteEligiblefun(45);
voteEligiblefun(17);
voteEligiblefun(8);
voteEligiblefun(20);
voteEligiblefun(-10);
