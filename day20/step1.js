/* 
    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = {}
            객체 내 속성 추가 : object.새로운속성명 = 값;
            객체 내 속성 값 호출 :  object.속성명 
            객체 내 속성의 값 변경 ; object.기존속성명 = 값;
        -배열도 객체
        -함수도 객체 
        -기본 자료형(숫자, 불, 문자열) 객체 아님!
            1.기본자료형 ----> 객체로 변환 (객체 자료형, 래핑 클래스)
                -왜? 객체로 사용하려고 (속성/메소드를 사용하니까.--부가자료--부가기능 첨부)

               | 이름 : 유재석 |             | 이름 : 강호동            |
               | 점심 : 도시락 |             | 점심 : 나가서 햄버거 구매 |   -> 패키지화 
               ---------------               --------------------------

            2.
              -new: 인스턴스(객체)를 만들때 사용하는 키워드 
              new Number( 숫자자료형 )
              new String( 문자자료형 )
              new Boolean( 불 자료형 )

*/

//p.257
const a = [];
a.sample =10;
console.log(a.sample)
console.log(typeof a); // typeof 상수/변수 : 해상 상수/변수 에 저장된 자료의 타입 확인하기 
console.log(Array.isArray(a)); // .is~~(변수/상수)      : 해당 상수/변수의 자료가 ~~자료형인지 확인 하는 것. 

function b(){}
b.sample = 10;
console.log(b.sample);
console.log(typeof b); // 함수는 객체의 특성을 완벽하게 갖는다. -> 그럼 객체 왜씀??? -> 그래서 요즘은 함수를 많이 씁니다만..... 일단 배워야 함... 객체도 많이씀...

//p.258 // 기본 자료형은 객체가 아니므로 속성을 넣을 수 없다. 

const c = 273;
c.sample=10;
console.log(c.sample);

//p.259 기본 자료형 객체로 선언 하기!!!
// * const 객체 = new 객체 자료형 이름 () *
const d = new Number(10);
    console.log(d);
d.sample = 10;
    console.log(d);
console.log(d.valueOf()) // 객체명.valueOf()  ----> 속성이 아닌 값을 추출 



//p.263
Number.prototype.sample =10 ;
const i = 273
console.log(i.sample);

const j = 100;
console.log(j.sample);


//p.264

Number.prototype.power = function (n=2){ // n=2 매개변수 함수호출시 () 넣어주는 값 ( +만약에 매개변수가 없으면 초기값을 넣는다)
    return this.valueOf()**n;
}

const a2 = 12 
console.log('a2.power():', a2.power())
console.log('a2.power(3):', a2.power(3))
console.log('a2.power(4):', a2.power(4))

//p.265
const h = '안녕하세요';
console.log(h.indexOf('안녕'));  // 0 : 문자열내 '안녕'이 존재하면 앞문자의 인덱스로 추출 
console.log(h.indexOf('하세'));  // 2
console.log(h.indexOf('자바'));  // -1 : 없음...

// console.log(h.contain('안녕'));     // contain is not a function [ contain() 매소드가 없다. ]

//js가 편의성으로 제공하면 좋은데 없으면 내가 만들자! 
String.prototype.contain = function(data){
    return this.indexOf(data)>=0;   // 0이상이면 true, 아니면 false 
                                    // 인덱스가 존재하면 true 존재하지 않으면 false 
}
console.log(h.contain('안녕'));