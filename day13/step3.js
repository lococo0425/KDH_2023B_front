/*
 p.174 반복문
    -반복 작업
    -형태
        for(let i = 0 ; i<반복횟수; i++){
            문장
        }
        for(초기값 ; 조건문 ; 증감식){실행코드;}

        1.let i=0       :반복을 시작할때 처음 값[초기 값]
            i를 0부터 시작
        2.i<반복횟수    :반복을 할 수 있는 조건 [조건을 충족시 반복 실행]
            i는 반복 횟수 보다 작으면 반복
        3. 문장         :반복시 실행 되는 구역
        4. i++          :1회 반복 후 실행되는 증감식
    -실행순서
        1.[1초기값] 변수에 처음값을 초기화.
        2.[2조건문] for{}안/반복문 에 들어갈수 있는지 검사 [T -> 가능 / F -> 불가능]
        3.[3실행문] {} 안에 있는 코드 모두 실행.
        4.[4증감식] 실행문 후에 증가 또는 감소
            //초기값은 1번만 실행되므로 증감식 이후 조건문으로 이동 
        5.[2조건문] 조건 재검사
        6.[3실행문] 실행코드 실행
        7.[4증감식] 증감식
            //
        8.[2조건문] 조건 재검사
        9.[3실행문] 실행코드 실행
        10.[4증감식] 증감식
            // 2조건문에 false가 나올때 까지 반복.
 */

    for(let i =0; i<=10; i++){
        console.log(`${i}우유 구매`)
    }
    //let i는 1부터 10이하 까지 1씩 증가 반복하면서 console.log에 출력 [총 10회]

    for(let i=0; i<5; i++){
        //i를 총 5회[0,1,2,3,4] 회 반복 실행하겠음
        console.log(`${i}회 반복입니다.`)
    }

//누적 합 구하기 
    let output = 0;
    for(let i=1; i<=100; i++){
        //i는 1부터 100이하 까지 증가하면서 output에 i를 더하는 작업을 반복 한다. 
        output += i
        //output에 i를 더한 값을 output에 저장 
        console.log(`${i}회 output : ${output}`)
    }
    console.log(`1부터 100까지의 숫자를 더하면 : ${output} 입니다.`)


// 반복문과 배열 
    const todos = ['우유 구매','업무 메일 확인하기','필라테스 수업'];
    for(i=0;i<todos.length;i++){ // 배열 갯수 만큼 출력하기 
        console.log(`${i}번째 할 일 : ${todos[i]}`)
    }
    for(i=todos.length-1; i>=0; i--){ // 배열 반대로 출력하기
        console.log(`${i}번째 할 일 : ${todos[i]}`)
    }

//예제 1부터 10 이하 까지 증가 반복 [한줄 표시]
    let outPrint = ''; //공백이 저장된 변수
    for(i=0; i<=10; i++){
        outPrint += ` ${i} `;
    }
    console.log(outPrint);
//예2 1부터 10이하까지 1씩 증가 반복 [ul 표시]
    outPrint = "";
    for(i=1;i<=10;i++){
        outPrint+=`<li> ${i} </li>`;
    }
    document.querySelector("ul").innerHTML = outPrint;
//예3 1부터 10 이하까지 1씩 증가 반복 [누적합계]
    let sum = 0;
    for(let i =0; i<=10; i++){
        sum += i // i를 sum에 더한수 sum에 대입 
    }

/* 
    예4 반복문 순서도. 모든 코드 과정 순서 작성 하기 
        초기값 : i = 1          ,       sum = 0
        for 시작
            i                    조건[i<10]               실행문[sum += i]        sum[누계]       증감식[i++]
            i=1                   true                        0+1 = 1             sum=1           i=2
            i=2                   true                        1+2 = 3             sum=3           i=3
            i=3                   true                        3+3 = 6             sum=6           i=4
            i=4                   true                        6+4 = 10            sum=10          i=5
            i=5                   true                        10+5 = 15           sum=15          i=6
            i=6                   true                        15+6 = 21           sum=21          i=7
            i=7                   true                        21+7 = 28           sum=28          i=8
            i=8                   true                        28+8 = 36           sum=36          i=9
            i=9                   true                        36+9 = 45           sum=45          i=10
            i=10                  true                        45+10 = 55          sum=55          i=11
            i=11                  false

*/

//예5 1부터 100까지 7배수 누적 합계
    // 1. i는 0부터 100까지 7씩증가
    // 2. i는 1부터 100까지 7배수  i%7==0
sum=0;
for(let i=0; i<=100; i+=7){
    sum += i;
}
console.log(`1부터 100까지 7배수 합 : ${sum}`)

sum=0;
for( i =1 ; i<100; i++){
    if(i%7==0){
        sum +=i;
    }
}
console.log(`1부터 100까지 7배수 합 : ${sum}`)

//for중첩
    for(let 부모 = 1; 부모<=5; 부모++){
        console.log(`부모 : ${부모}`)
        for(let 자식 =1; 자식<=3; 자식++){
            console.log(`${부모}의 자식 : ${자식}`)
        }
    }

//구구단 2단만 만들기

for(let i=2; i<=2; i++){
    for(let j=1; j<=9;j++){
        console.log(`${i}*${j} = ${i*j}`)
    }
}

//구구단 만들기

    for(i=2; i<=9; i++){
        console.log(`=================${i}단=================`)
        for(j=1; j<=9; j++){
            console.log(`${i} X ${j} = ${i*j}`)
        }
    }

