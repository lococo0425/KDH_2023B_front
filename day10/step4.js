
/* 연산자 연습문제 */
// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력


/*

let k = Number(prompt("국어점수를 입력하세요"));
let e = Number(prompt("영어점수를 입력하세요"));
let m = Number(prompt("수학점수를 입력하세요"));

console.log(`총점은 : ${k+e+m}점  평균은 : ${(k+e+m)/3}점 입니다.`);

// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이[ 반지름*반지름*3.14 ] 출력

let r = Number(prompt("반지름을 입력하세요"));
console.log(`원 넓이는 : ${r*r*3.14} 입니다.`);

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력[- 54.5   84.3 두 실수 입력시   결과 : 64%]

let a = Number(prompt("실수 1을 입력하세요"));
let b = Number(prompt("실수 2를 입력하세요"));

console.log(`결과 : ${parseInt(a/b*100)}% `);


// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력

let num = Number(prompt("문제4. 숫자를 입력하시오"));

console.log(`${num%2==1 ? "홀수" : "짝수"} `);


// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력

let num1 = Number(prompt("문제5. 숫자를 입력하시오"));

console.log(`${num1%7==0 ? "ture" : "false"}`);

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용]

let 금액2 = Number(prompt("문제6. 십만원 단위의 금액을 입력하세요."))
let 십만원권 = parseInt(금액2/100000);
금액2 -= (십만원권*100000);
let 만원권 = parseInt(금액2/10000);
금액2 -= (만원권*10000);
let 천원권 = parseInt(금액2/1000);

console.log(`십만원 : ${십만원권}장 , 만원 : ${만원권}장 , 천원 : ${천원권}장`);


// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 : true 출력 아니면 false 출력 ]

let id = prompt("아이디를 입력하세요");
let pw = Number(prompt("비밀번호를 입력하세요"));
console.log(`${(id=="admin") && (pw==1234) ? true : false}`);

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
let num3 = Number(prompt("문제8. 숫자를 입력하세요"));
console.log(`${(num3%2==1) && (num3%7==0) ? true : false}`);

// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력

    let num4 = Number(prompt("문제9. 첫번째 숫자를 입력하세요"));
    let num5 = Number(prompt("문제9. 두번째 숫자를 입력하세요"));

    console.log(`결과 : ${num4>num5 ? num4 : num5}`);
// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 

    let num6 =Number(prompt("문제10. 첫번째 숫자를 입력하세요"));
    let num7 =Number(prompt("문제10. 두번째 숫자를 입력하세요"));
    let num8 =Number(prompt("문제10. 세번째 숫자를 입력하세요"));
    let numresult = num6>num7 ? num6 : num7;

    console.log(`결과 : ${numresult>num8 ? numresult : num8}`);

*/


   
/*
let 정수1 = Number(prompt('정수1'));
let 정수2 = Number(prompt('정수2'));
let 정수3 = Number(prompt('정수3'));

let max = 정수1;
max = max < 정수2 ? 정수2 : max;
max = max < 정수3 ? 정수3 : max;
console.log(`가장 큰 수는 ${max}`)*/

// 문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9]

    /* 
    let num10 = (prompt("문제11. 첫번째 숫자를 입력하세요"))
    let num11 = (prompt("문제11. 두번째 숫자를 입력하세요"))
    let num12 = (prompt("문제11. 세번째 숫자를 입력하세요"))
    let numresult1 = num10>num11?num11+num10:num10+num11
    console.log(`${numresult1>num12?num12+numresult1:numresult1+num12}`)
    */
        /* 
            오름차순 하는 방법 [ 정렬 ]
                7   5   9
                a   b   c
                
                1.a와 b 를 비교 a>b 이면 자리바꿈 
                -----모든 자리수 마다 비교.
                2.a와 c 를 비교 a<c이면 그대로 
                3.b와 c 를 비교 

                -스왑 하는 방법 [임의 변수 활용]
                1. temp 임의[임시저장소]생성
                2. temp에 a를 대입
                3. a에 b를 대입
                4. b에 temp 대입
        */

        /*
        let 정수1 = Number(prompt('정수1'));
        let 정수2 = Number(prompt('정수2'));
        let 정수3 = Number(prompt('정수3'));


        //1. 첫번째 자리비교
        let temp = 정수1>정수2 ? 정수2 : 정수1      //정수2 -> temp
        정수2 = 정수1>정수2 ? 정수1 : 정수2         //정수1 -> 정수2
        정수1 = 정수1>정수2 ? temp : 정수2        //temp -> 정수1


        temp = 정수1>정수3 ? 정수3 : 정수1;
        정수3 = 정수1>정수3 ? 정수1 : 정수3;
        정수1 = 정수1>정수3 ? temp : 정수1;
        
        //2. 두번째 자리비교
       
        temp = 정수2>정수3 ? 정수3 : 정수2
        정수3 = 정수2 >정수3 ? 정수2 : 정수3 
        정수2 = 정수2 >정수3 ? temp : 정수2 
        */
        
        // - 최대 최소 미들 값 구해서 풀기 




/* 문제12 : [ 가위바위보 게임 ] 
- 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
- 승리자 판단과 무승부 경우의수를 출력하시오.
[입력]
   플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
[경우의수 판단]
   플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
   플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
   비겼을경우 '무승부' 출력
*/
/* sol1, sol2 공통 
let p1 = prompt("player1. 가위(0) 바위(1) 보(2) ")
let p2 = prompt("player2. 가위(0) 바위(1) 보(2) ")
*/
/* sol1.
console.log(`${(p1==0)&&(p2==2)?"플레이어1 승리":(p1==0)&&(p2==1)? "플레이어2 승리": (p1==0)&&(p2==0)?"무승부":
(p1==1)&&(p2==0)?"플레이어 1승리":(p1==1)&&(p2==1)? "무승부" :(p1==1)&&(p2==2)?"플레이어2 승리":
(p1==2)&&(p2==0)?"플레이어 2승리": (p1==2)&&(p2==1)? "플레이어 1승리" : (p1==2)&&(p2==2)?"무승부":""}`)
*/
/* sol2.
console.log(`${(p1==p2)? "무승부" : 
(p1==0)&&(p2==1)||(p1==1)&&(p2==2)||(p1==2)&&(p2==0)?  "플레이어 2승리" : "플레이어 1 승리"
}`)
*/


let player1 = Number(prompt('플레이어1'))
let player2 = Number(prompt('플레이어2'))
let answer = player1==player2 ? 
                    '무승부' :  player1==(player2+1)%3 ? 
                                '플레이어1 승리' :  '플레이어2 승리';
console.log( answer )


