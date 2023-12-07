/* p.102 : 상수와 변수 */
//1.상수만들기
    //1.const       키워드작성 -> 상수 인지 변수 인지 식별용
    //2.상수명      이름[식별자] -> 상수가 여러개 있으므로 그 중에서 구별 하려고 
    //3. =          대입 연산자 [값을 변수에 넣는 역할] -> 오른쪽 값을 왼쪽에 넣기 
    //4. 자료       저장할 값      
const pi = 3.141592;

//2. 상수 호출하기 [상수 이름 작성]
console.log(pi);
// console.log(김동훈); // 김동훈 is not defined -> 정의되지 않았습니다 

//3. 상수의 값을 변경 -> 불가능
// pi = 3.97 -> 불가능

    const r = 10;

//4. 상수의 연산
console.log(2*pi*r); //곱하기 먼저인지 .... 상수의 값 호출 먼저인지...?? -> 상수 호출이 먼저입니다.

//5. 동일한 상수명 사용 [상수명은 식별용 이므로 중복이 불가능함.]
// const pi = 3.97; //Uncaught SyntaxError: Identifier 'pi' has already been declared 

//6. 상수의 값을 생략 했을때[상수 만들때[처음] 값을 넣는 과정=초기화, 초기화가 없으면 오류 발생 ]
// const pi2; //Missing initializer in const declaration -> 상수에 값이 들어가지 않았습니다.

//p.105 변수 만들기

//1.변수 만들기
    //1. let
    //2. 변수명
    //3. =
    //4. 값
 let pi3 = 3.141592;

 //2. 변수 호출하는 방법 [변수 호출시에는 키워드 사용 안함]
 console.log(pi3);
 console.log("pi3 = "+ pi3); //연결연산자 : "문자열"+변수의값 => 문자열
 console.log(`pi3 = ${pi3}`) //템플릿 문자열 활용 `문~~~자~~~~~~${변수/상수/값}~~~열`

 //3. 변수 값 변경[값 변경시에도 변수 호출후 다시 대입]
 pi3 = 3.15; console.log(pi3);

 //4. 변수에 연산
 let r3 = 10;
 console.log(2*pi3*r3);

 // var 와 let 키워드 차이 
let value1 = 10;
//let value1 = 10; //불가능, 초기화 1번 [동일한 변수명으로 선언시 선언 불가]
var value2 = 10;
var value2 = 10; // 가능, 초기화 여러번 가능 [동일한 변수명으로 선언시 동일한 이름이 있을경우 덮어씌우기]


//p.108 복합 대입 연산자
let value = 10;

value += 10;
    //vs        같은 결과를 얻는 다른 표현 방법
value = value + 10;

//***** JS에서 HTML(문자열) 작성할때.
let list=``; // list 변수에 빈 문자열 넣은 상태로 선언
list += `<ul>`;
list += `   <li>Hello</li>`;
list += `   <li>JavaScript</li>`;
list +=`</ul>`;

document.write(list);


//예제1 : 2개의 숫자를 입력받아 더한 결과 값을 HTML에 <h3>안에 출력
let a = prompt("숫자를 입력하시오");
let b = prompt("숫자를 입력하시오");
a = Number(a);
b = Number(b);

let result = "";
result += `<h3>${a+b}</h3>`
document.write(result);



//예제2 : 2개의 숫자를 입력받아 더 큰 값을 HTML에 <h3> 안에 출력

// let x = prompt("숫자를 입력하시오");
// let y = prompt("숫자를 입력하시오");
// x=  Number(x);
// y= Number(y);

// if(x>y){
//     let result2="";
//     result2 += `<h3>${x}</h3>`;
//     document.write(result2);
    
// }
// else{
//     let result2="";
//     result2 += `<h3>${y}</h3>`
//     document.write(result2);
// }

let x = Number(prompt("예제2 1번째 숫자를 입력하시오"));
let y =Number(prompt("예제2 2번째 숫자를 입력하시오"));
    //삼항연산자[피연산자3개] : 조건 ? 참 : 거짓
        //-조건[T/F] 에 따른 실행
        // true /false 을 다르게 표현

document.write(`<h3> 예제 2 결과 : ${x>y ? x : y}`);
    

