const age = parseInt(prompt("How old are you?"));

// 숫자인지 확인을 age가 NaN인지 아닌지로 확인
console.log(isNaN(age));

// conditional
if(isNaN(age)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.")
}