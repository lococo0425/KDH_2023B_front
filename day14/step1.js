/* 
p.175 
    1. for(let i=0 ; i<배열명.length; i++)
    2. for(let i in 배열명){}
    3. for(let i of 배열명){}
*/










// // 문제1) 입력받은 수 만큼 * 출력 
let output1 = ""
let num1 = Number(prompt("문제1 : 숫자를 입력하세요!")) 
for(i=1; i<=num1; i++){
    output1 += '*'
}
console.log(output1);


// // 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
let output2 = ""
let num2 = Number(prompt("문제2 : 숫자를 입력하세요!"))
for(i=1; i<=num2; i++){
    if(i%3==0){ output2 += '*\n'}
    else{ output2 += '*'}
}
console.log(output2);

// // 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *
// **         
// ***      
// ****   
// *****
let output3 = ""
let num3 = Number(prompt("문제3 : 숫자를 입력하세요!"))
for(i=1; i<=num3; i++){
    for(j=1; j<i+1 ; j++){
        output3 += '*'
    }
    output3 += '\n'
}
console.log(output3);


// // 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
// *****
// ****
// ***
// **
// *
let output4 = ""
let num4 = Number(prompt("문제4 : 숫자를 입력하세요!"))
for(i=1; i<=num4; i++){
    for(j=num4; j>=i; j--){
        output4 += '*'
    }
    output4 += '\n'
}
console.log(output4)

// // 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    **
//   ***
//  ****
// *****
let output5 = ""
let num5 = Number(prompt("문제5 숫자를 입력하세요!"))
for(let i=1; i<=num5; i++){
    for(let j=num5; j>i; j--){
        output5 += " "
    }
    for(let j=1; j<=i; j++){
        output5 += "*"
    }
    output5 += "\n"
}
console.log(output5)
// // 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *****
//  ****
//   ***
//    **
//     *
let output6 = ""
let num6 = Number(prompt("문제6 숫자를 입력하세요!"))
for(let i=1; i<=num6; i++){
    for(let j=1; j<i; j++){
        output6 += " "
    }
    for(let j=num6; j>=i; j--){
        output6 += "*"
    }
   
    output6 += '\n'
}
console.log(output6)
// // 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
//     *
//    ***
//   *****
//  *******
// *********
let output7 = ""
let num7 = Number(prompt("문제7 숫자를 입력하세요!"))
for(let i=1; i<=num7; i++){
    for(let j=num7; j>i; j--){
        output7 += ' '
    }
    for(let k=0; k<2*i-1; k++){
        output7 += "*"
    }
    output7 += "\n"
}
console.log(output7)
// // 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
// *********
//  *******
//   *****
//    ***
//     *
let output8 = ""
let num8 = Number(prompt("문제8 숫자를 입력하세요!"))
for(let i=1; i<=num8; i++){
    for(let j=1; j<i; j++){
        output8 += " "
    }
    for(let k=0; k<=2*(num8-i); k++){
        output8 += "*"
    }
    output8 += '\n'
}
console.log(output8);
// // 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *
let output9 = ""
let num9 = Number(prompt("문제9 숫자를 입력하세요!"))


for(let i=1; i<=num9; i++){
    for(let j=num9; j>i; j--){
        output9 += ' '
    }
    for(let k=0; k<2*i-1; k++){
        output9 += "*"
    }
    output9 += "\n"
}
for(let i=1; i<=num9; i++){
    for(let j=1; j<i; j++){
        output9 += " "
    }
    for(let k=0; k<=2*(num9-i); k++){
        output9 += "*"
    }
    output9 += '\n'
}
console.log(output9)
// // 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *


let output = ""
let num = Number(prompt("문제10. 숫자를 입력하세요"))

for(let i=0; i<num; i++){
    for(let j=0; j<i;j++){
        output += " "
    }
    output+= '*'
    for(let j=0; j<=2*(num-i)-1;j++){
        output+= " "
    }
    if(i<num-1){
        output += '*'
    }
    output += '\n'
}
for (let i = num - 2; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        output += " ";
    }
    output += '*';
    for (let j = 0; j <= 2 * (num - i) - 1; j++) {
        output += " ";
    }
    if (i < num - 1) {
        output += '*';
    }
    output += '\n';
}
console.log(output)

