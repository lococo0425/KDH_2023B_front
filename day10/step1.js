console.log("자바스트립트실행2")

//p.90 숫자 자료형
console.log() //크롬 개발자 도구(f12)에 출력하는 함수 

console.log(5+3*2);
console.log((5+3)*2); // 사칙연산 [연산자 우선순위]

console.log(5-3*2); // 뺄셈

console.log(10%2); // 10에서 2를 나눈 나머지 값 0
console.log(10%3); // 10에서 3을 나눈 나머지 값 1 
console.log(10%4); // 10에서 4를 나눈 나머지 값 2 

console.log(10/2); // 10에서 2를 나눈 값 5
console.log(10/3); // 10에서 3을 나눈 값 3.3333333333

//몫 구하기
console.log(parseInt (10/3)); // 정수로 변환해주는 함수 = 소수점 버리기 

//p.90~91 불 자료형 
console.log(true);
console.log(false);

console.log(52>273); //52가 273보다 크다 false
console.log(52<273); //52가 273보다 작다 true
console.log(10===10); console.log(10==10); //true, true
console.log(10==="10"); console.log(10=="10"); // false, true

console.log('가방'>'하마'); //false
    //오름차순 : 0 1 2 3 4 ~ , a b c d ~, ㄱ ㄴ ㄷ ㄹ ~

console.log(!true); // true -> false
console.log(!false); // false -> true

console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false

console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

//96~97p. 자료형 검사 (현재 자료가 숫자인가 ? 문자열인가? 불인가? 확인 작업)
    // why? -> 자료형 마다 다른 로직/기능 작업 ---- 오류를 피하기 위해서
console.log(typeof("안녕하세요")); // "안녕하세요"의 자료형 확인 string[문자열]
console.log(typeof(273)); // 273의 자료형 확인 number[숫자]
console.log(typeof(true)); // true의 자료형 확인 boolen[불]

console.log(typeof "안녕하세요");
console.log(typeof(50-30)); // typeof는 단항 연산자 이므로 계산이 필요할때 50-30은 안됌 (50-30)은 됌


//p.98 템플릿 문자열 (서로 다른 자료형들을 존재할때는 + 연결 연산자)
console.log('표현식 273+52 의 값은 ' + (273+52) + "입니다.");
             // 문자열                  숫자        문자열
            // 연결 연산자 이용하면 되지만...... 너무 많으면 복잡해진다.

console.log(`표현식 273+52 의 값은 ${273+52}입니다.`)
    // ` 백틱
        //1. `` 으로 전체를 감싼다.
        //2. 자료형 표현 표현할 위치에 ${데이터}
/* -------------------------------------------------- */
console.log(""==[]); //빈문자열 과 빈배열 같은 값 의미
console.log(0==[]); //0과 빈배열과 같은 값 의미 
/* -------------------------------------------------- */


/* 
p.100 마무리 확인문제
    1.불, 숫자, 술자, 불
    2.
        #연습문제
        \\\\
    3.
        녕
        하
        세
        요
    4.
        0
        4
*/


