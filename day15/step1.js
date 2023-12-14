/* 

    자료형 
        0.undefined                 : 자료없음
        1.숫자형, 2.문자열, 3.불, 
        4.배열[]                    : 여러개의 자료를 하나의 자료 집합 
            -성질, 상태, 필드 = 현재 데이터의 상태 
        5.함수(){}                  : 코드집합
            -행위, 이벤트, 메소드
        

    1. 함수
        - 코드 묶음.
        - 용어 
            -함수호출               : 함수 사용할때 f(x)
            -매개변수               : 함수 호출할때 괄호{} 내부에 여러가지 자료를 넣을때  = 인수
            -리턴값                 : 함수 호출해서 최종적으로 나오는 결과 = 반환
                -void               : 없다.

        -종류
            1. 매개변수o 리턴o
                function 함수 (x, y){ z = x+y; return z;}
            2. 매개변수o 리턴x
                function 함수 (x, y){ z = x+y; }
            3. 매개변수x 리턴o
                function 함수(){return 3+3;}
            4. 매개변수x 리턴x
                fucntion 함수(){}
        
        -함수 사용하면 좋은점
            1. 반복되는 코드를 한번에 정의 하고 필요에 따라 호출해서 반복 작업을 피할수 있다. [ 코드 양을 줄일수 있다.]
            2. 긴 프로그램을 기능별로 나눠 여러 함수로 나눠 작성하면 모듈화[조각단위]로 전체 코드의 가독성이 좋아진다.
            3. 기능별(함수별)로 수정이 가능하므로 유지보수가 쉽다. 

        - 1. 익명함수 : 이름이 없는 함수 


*/
//p.197 : *익명함수
    //함수에 이름이 없어서 함수 호출이 불가능 
    //해결책 : 익명함수를 변수/상수에 넣어서 변수상수 호출시 함수 실행
// const 함수 = function(){
//     console.log('함수 내부 코드....1');
//     console.log('함수 내부 코드....2');
//     console.log('함수 내부 코드....3');
//     console.log('함수 내부 코드....4');
//     console.log("");
// }

// 함수();
// 함수();

// console.log(typeof(함수));
// console.log(함수);

//p.199 선언적 함수
function 함수(){
    console.log('함수 내부 코드 ...1');
    console.log('함수 내부 코드 ...2');
    console.log('함수 내부 코드 ...3');
    console.log('');
}

함수();
함수();

console.log(typeof 함수);
console.log(함수);

//p.201 매개변수와 return 값을 갖는 기본 형태의 함수 만들기
function f(x){
    return x*x;
}
console.log(f(3));

function isLeapYear(year){
    return (year%4==0)&&(year%100!==0)||(year%400==0)
}

console.log(`2020년은 윤년인가요? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년인가요? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년인가요? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년인가요? === ${isLeapYear(1900)}`);

//p.204 a~b까지 더하는 함수 
function numAll(a,b){
    let output = 0;
    for(let i=a; i<=b; i++){
        output += i
    }
    return output;
}
console.log(`1에서 100까지의 합은 : ${numAll(1,100)}`)