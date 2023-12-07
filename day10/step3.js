//p.109~110 증감 연산자
    // - 복합대입연산자 간략하게 사용하려고
    // 증감 연산자는 1씩 증가 또는 1씩 감소만 가능하다. [왜? 프로그래밍에서 순차적(순서대로) 처리]

let value1 = 10;

value1 = value1 + 1;                 //1. 변수호출하고 연산후 결과를 변수에 대입
    //vs
value1 += 1;                        //2. 1번 간략하게 하기 위해 
    //vs
value1++                            //3. 2번 간략하게 하기 위해
    //vs
++value1                            //4. 2번 간략하게 하기 위해 

    //p.110

let number1 = 10; number1++; console.log(number1); // 후위 = 11
let number2 = 10; ++number2; console.log(number2); // 전위 = 11
let number3 = 10; console.log(number3++);           //후위 = 10  출력 후 증가
let number4 = 10; console.log(++number4);           //선위 = 11  출력 전 증가 

// 차이점
let result1=number4++ +10; console.log(result1); //대입후 number4 증가O
    console.log(result1);                       //result1 증가 x 
    console.log(number4);


