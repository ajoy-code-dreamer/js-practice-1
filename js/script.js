// person details
var ageMinimum = 18;
var ageLimit = 40;
var job = true;
var governmentJob = true;
var salary = 40000;
var married = false;
var availableHouse = true;
// person details

// marriage condition

if (ageMinimum >= 18 && ageLimit <= 40) {
    if (job == true && governmentJob == true) {
        if (salary >= 40000) {
            if (married == false) {
                if (availableHouse == true) {
                    console.log("You are eligible for marriage");
                } else {
                    console.log("You are not eligible for marriage because you don't have house");
                }
            } else {
                console.log("You are not eligible for marriage because you are already married");
            }
        } else {
            console.log("You are not eligible for marriage because your salary is less than 40000");
        }
    } else {
        console.log("You are not eligible for marriage because you don't have government job");
    }
}else{
    console.log("You are not eligible for marriage because your age is not in between 18 to 40");
}
