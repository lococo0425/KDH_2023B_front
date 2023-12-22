//p.267 Number 객체
const l = 123.456789;
console.log(l.toFixed(2));
console.log(l.toFixed(3));
console.log(l.toFixed(5));

//NaN 과 Infinity 확인하기 isNan(), isFinite()
const m = Number("가나다라")
console.log(m);
console.log(Number.isNaN(m));

const n = 10/0
console.log(n)
const o = -10/0
console.log(o);

console.log(Number.isFinite(n))
console.log(Number.isFinite(o))

console.log(Number.isFinite(1))     

//String 객체 
//p.269
    //-문자열 양쪽 끝 공백 없애기 : trim()
const stringA = `
메시지를 입력하다보니 앞에 줄바꾸도 들어가고`
const stringB = `                 앞과 뒤에 공백도 들어가고                 `

console.log(stringA);
console.log(stringB);
console.log(stringA.trim());
console.log(stringB.trim());

//.split(기준문자열) 기준 문자열 기준으로 분해후 배열에 반환 
const timeList = "12:30\n15:21"
console.log(timeList)
const timeArray = timeList.split('\n')
console.log(timeArray)
const time = timeArray[0];
console.log(time)
const hour = time.split(':')
console.log(hour[0])
const timeObjcet = { hour : hour[0], min : hour[1]};
console.log(timeObjcet);

//JSON 객체 
    // js의 객체처럼 자료를 표현 하는 방식 
        //JSON 다른 애플리케이션과 통신할때 데이터 교환 목적 사용
        //1.js 객체 --> JSON 문자열  -->  : JSON.stringify()

    //  localStorage 브라우저에 저장, 브라우저 자체가 꺼지면 사라짐, 다른 탭에서 공유됌
    //  sessionStorage 브라우저에 저장, 탭이 꺼지면 메모리도 사라짐, 같은 탭에서 공유됌
    



//Math.random()

const num = Math.random()

console.log('# 랜덤한 숫자');
console.log('0-1 사이의 랜덤한 숫자 : ',num);
console.log("");

console.log('#범위 확대하기 ');
console.log('0~10 까지 의 랜덤한 숫자 ',num*10);
console.log('0~50 까지 의 랜덤한 숫자', num*50);
console.log("");

console.log('#범위 이동하기');
console.log('-5~+5 까지 의 랜덤한 숫자 ',num*10 - 5);
console.log('-25~+25까지의 랜덤한 숫자',num*50-25);
console.log("");

console.log('#랜덤 정수 숫자 ');
console.log('-5~+5 까지의 랜덤한 정수', Math.floor(num*10-5));
console.log('-25~+25 까지의 랜덤한 정수', Math.floor(num*50-25));
console.log("");

