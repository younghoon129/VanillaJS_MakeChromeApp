const age = prompt('How old are you?')

console.log(age)
console.log(typeof age);

// string 을 number로 변환해줌, 숫자 아니면 NaN 반환
parseInt('15')
console.log(typeof "15", typeof parseInt('15'));