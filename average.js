
for (let a = 4; a < 4; a++) {
    console.log("test");    // => It will not display at all
}

// Average using array and prompt 

let user = [];
let sum = 0;
let avg = 0;
for (let i = 0; i < 3; i++){
    let age = prompt("enter your age");
    let userAge = Number(age);
    user.push(userAge);
    sum += user [i];
    avg = sum/ user.length;
}
alert("the average :" + avg);
 


 
