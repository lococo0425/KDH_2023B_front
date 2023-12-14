
/*
    HTML 에 .js 파일이 포함된 구조 [HTML 열리면 js 코드는 실행된다.]
    1.js 함수 호출
        함수1()
    2.HTML에서 js함수 호출 
        <마크업 이벤트속성='함수명(매개변수)' />
            -이벤트속성 종류 
                onclick 등등등
*/
//1. 매개변수X , 리턴X
function 함수1(){console.log('함수1 실행')}
함수1()

//2. 매개변수2개, 리턴X
function 함수2(x,y){console.log(x+y);}
함수2(3,5)

//3. 매개변수X, 리턴O
function 함수3(){return 3+8;}
함수3()
console.log(함수3())
    //리턴값을 가지고 추후 로직을 사용할 수 있다. 
let result = 5 + 함수3();
console.log(result);

//4. 매개변수O, 리턴O
function 함수4(x,y){return x+y;}

//5. 함수 안에 함수
function 함수5(){
    let result = 함수6(3)
    console.log(result);
}
function 함수6(x){return x*x}

// - 변수 위치에 따른 함수 내부에서 변수 호출
    // - 매개변수를 이용한 서로 다른 함수간의 자료 전달.
    //-(전역)자료를 사용하면 모든 함수에서 사용가능
        //특징 : 프로그램이 종료될때까지, 그 자료는 사라지지 않는다.
    // -(지역)자료를 사용하면 다른 함수에서 사용 불가능 [단 매개변수를 쓰면 가능하다.]
        //- 특징 : 메모리 효율성이 좋다. 기능에 필요한 자료만 쓰고 기능이 끝나면 버린다.
        //[프로그램 전체적으로 사용하는 자료가 아니면 사용후 버려야 한다. ]
const 전국지역 = 10;

function 경기도(지역){
    const 경기도 = 5;
    console.log( 전국지역 );
    return 지역*5;
}
function 강원도(){
    const 강원지역 =5;
    경기도(강원지역)
    console.log(전국지역)
}
경기도(전국지역);

//최솟값 구하는 함수 만들기
function min(array){
    let output = array[0];
    for(const item of array){
        if(output > item){
            output = item
        }
    }
    return output
}

const testArray = [52, 273, 32, 103, 275, 24, 57]
console.log(`${testArray}에서 최솟값은 :${min(testArray)}입니다.`)