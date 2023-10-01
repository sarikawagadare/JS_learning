

 var func = function voteEligiblefun(age){
    if (age== 0 || age<0 || age>130 ) {
        console.log(` Invalid Data`);
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
func(45);
func(17);
func(20);
func(-10);
func(8);