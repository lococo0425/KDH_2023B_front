/* 
    자료형
        1.숫자          : 1 vs 2 vs 3
        2.문자열        : " " vs ' ' vs ` `
        3.불            : true vs flase
        4.undifined     :자료데이터 없다, [*undefine vs " " vs 0 -> 다 다른겁니다.]
        5.배열          :[자료, 자료, 자료]
                            1. [자료 안에 숫자 문자열 불 배열]
                            2. [숫자 문자열 불 배열 변수 상수 함수]
                            6.함수          :function
                        - 1. const/let 변수명 = function(){}
                        - 2. function 함수명 (){}
        7.객체(object)  :{key:value, key: value, key : value }
                        -1.{
                            key : 1,
                            key : "유재석",
                            key : true,
                            key : [ ],
                            key : { },
                            key : funciton()
                            }
        
*/


//1. object 객체를 만들어서 출력하기
const product = {
    제품명 : "7D 건조망고", 유형 : "당절임", 성분 : "망고, 설탕, 메투중아황산나트륨, 치자황색소", 원산지: "필리핀"
}

console.log(product)
console.log(product["제품명"]);
console.log(product["유형"]);
console.log(product["성분"]);
console.log(product["원산지"]);
console.log(product.제품명);
console.log(product.유형);
console.log(product.성분);
console.log(product.원산지);

//p.248
const 객체2 ={
    numer : 273, string : '구름', Boolean: true,
    array : [273,103,21],
    method : function(){},
    객체3 : {method2 : function(){}}
}
console.log(객체2) // console : 객체 내 log속성에 함수 호출
//document.querySelector(); // document: 객채 내부에 querySelector속성에 함수 호출 
//.(온점) : 접근연산자 : 객체내 속성에 접근 

객체2.method(); // 객체2내 속성(메소드)호출
객체2.객체3.method2(); // 객체2내 속성(객체3내 속성(메소드2)호출)호출



//p.248 속성과 메소드 
    // 메소드 : 객체의 속성 중에 '함수 자료형'인 속성 

//p.249    
//객체 내에서 this 키워드 사용하기 

    //-this.속성 : 매소드 내에서 자기 자신이 가진 속성을 출력할때 사용하는 키워드  
    const pet ={
        name : '구름',//속성
        eat : function(food){//메소드 eat()

        alert(`${this.name}은 ${food}을 먹습니다. `)
    }
    }

    pet.eat('밥')

//p.249
    //동적으로 객체 속성 추가/제거 -> 속성을 추가하거나 제거하기 
    //속성 추가하기
    const student = {}
    student.이름 = '유재석'
    student.취미 = '방송'
    student.장래희망 ='개그맨'

    console.log(student);

    //속성 삭제하기
    const student1 = {}
    student1.이름 = '유재석'
    student1.취미 = '방송'
    student1.장래희망 ='개그맨'
    
    delete student1.장래희망;
    console.log(student1);

    //p.251
        //메소드 간단 선언 구문 
        //function(){} 구문을 줄일 수 있다. -> ex) eat : function(food){} -> eat(food){}
    const pet1 ={
        name: '구름',
        eat(food){//함수명이 속성명을 대신한다.
            alert(`${this.name}은 ${food}를 먹습니다.`)
        }

    }
    pet1.eat('밥')



    //p.254
    /* 
        1.
        {
            name : "혼자 공부하는 파이썬",
            price : 18000,
            publisher : '한빛 미디어'
        }
        2. 객체명[새로운속성명] = 새로운값
        3. delete 객체[속성]
        4.
            -매소드 속성
                print : function(lang){}
            -실행결과 예측
                '빵'은 '스페인어'로 'pan'입니다.   
    */
   

