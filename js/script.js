// person details
// var ageMinimum = 18;
// var ageLimit = 40;
// var job = true;
// var governmentJob = true;
// var salary = 40000;
// var married = false;
// var availableHouse = true;
// person details

// marriage condition

// if (ageMinimum >= 18 && ageLimit <= 40) {
//     if (job == true && governmentJob == true) {
//         if (salary >= 40000) {
//             if (married == false) {
//                 if (availableHouse == true) {
//                     console.log("You are eligible for marriage");
//                 } else {
//                     console.log("You are not eligible for marriage because you don't have house");
//                 }
//             } else {
//                 console.log("You are not eligible for marriage because you are already married");
//             }
//         } else {
//             console.log("You are not eligible for marriage because your salary is less than 40000");
//         }
//     } else {
//         console.log("You are not eligible for marriage because you don't have government job");
//     }
// }else{
//     console.log("You are not eligible for marriage because your age is not in between 18 to 40");
// }

// class 26 assignment
// multiplication table

// for(let i=1; i<=10; i++){
//     console.log(namtaNumber + " x " + i + " = " + namtaNumber*i);
// }
const ul= document.querySelector('ul')
let userInput = Number(prompt("please input a number only"))

function namtaTable(a){
    for(let i=1; i<=10; i++){
        if(i % 2 === 0){
            ul.innerHTML+= `<li> ${a} x ${i} = ${a * i} even</li> `
            // console.log(a + " x " + i + " = " + a*i + " even");
            

        }else{
             ul.innerHTML+= `<li> ${a} x ${i} = ${a * i} odd</li> `

        }
    }

}

namtaTable(userInput)





