/* 
    p.142
        switch조건문
        짧은 조건문(삼항 연산자)
*/

//switch 조건문
    /* 
    1.형태
    switch(자료){
        case 조건A : 실행코드; break;
        case 조건B : 실행코드; break;
        case 조건c : 실행코드; break;
        default : break;
    }
    */
   //홀수 짝수 구분 예쩨
const input = Number(prompt('숫자를 입력하세요','숫자')); //자료를 입력받아 숫자 자료형 변환 후 상수에 저장

    //1.if 
    if(input%2 == 0 ){console.log("짝수 입니다.")}
    else if(input%2 ==1) {console.log("홀수 입니다.")}
    else(console.log("숫자아님"))
    
    //2.switch [break : 중괄호 탈출시 사용]
    switch(input%2){
        case 0:
            console.log("짝수입니다.")
            break
        case 1:
            console.log("홀수입니다.")
            break
        default:
            console.log("숫자아님")
            break
    }

const date = new Date()
const hour = date.getHours()

    switch(true){
        case hour<11:
            console.log("아침 먹을 시간 입니다.")
            break;
        case hour<15:
            console.log("점심 먹을 시간 입니다.")
            break;
        default:
            console.log("저녁 먹을 시간 입니다.")
            break;
    }

//조건부 연산자 사용하기 (삼항연산자)
    const input2 = prompt('숫자를 입력해주세요.', '');
    const number = Number(input2)

    const result = (number>0)? '0이상의 숫자 입니다.' : '0보다 작은 숫자 입니다.'
    console.log(result)

// 홀수 짝수 구하기 
    // 수 %2 ==0 ,1
    // 문자인경우 : 문자열[문자열.length-1]

const score = Number(prompt('학점을 입력해주세요'));
if(score==4.5){console.log('신')}
else if(4.2<=score){console.log('교수님의 사랑')}
else if(3.5<=score){console.log('현 체제의 수호자')}
else if(2.8<=score){console.log('일반인')}
else if(2.3<=score){console.log('일탈을 꿈꾸는 소시민')}
else if(1.75<=score){console.log('오락문화의 선구자')}
else if(1.0<=score){console.log('불가축천민')}
else if(0.5<=score){console.log('자벌레')}
else if(0<score){console.log('플랑크톤')}
else{console.log("시대를 앞서가는 혁명의 씨앗")}

//p.153
    //문자열.split('기준문자') : 문자열내 특정문자 기준으로 문자 분리
    //'유재석,강호동,신동엽'.split(',') : 3조각으로 쪼개짐. 유재석  강호동  신동엽
        //여러 조각/자료를 모아두는 곳 == 배열 [여러 자료를 저장하는곳]
    
   /*  const rawInput = prompt('태어난 해를 입력해주세요')
    const year = Number(rawInput)
    const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',')

    console.log(`${year}년에 태어났다면 ${tti[year%12]} 띠 입니다.`) */

//p.154~
    //1.
    //2. 집에서 풀이
    //3.
    const rawInput = prompt("태어난 해를 입력해주세요."," ");
    const year = Number(rawInput);
    const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',')
    const ttl = '갑,을,정,병,무,기,경,신,임,계'.split(',')
    console.log(`${year}년에 태어났다면 ${tti[year%12]}${ttl[year%10]}띠 입니다.`)
    
    //4.
    //5.

