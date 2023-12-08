
//p.131 if 조건문
/* 
    -조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문.
    가장 일반적으로 사용 하는 조건문 : IF
    
        형태

        if(boolean 값이 나오는 표현식){
            참일때 실행코드;
        }
    
*/

    // if(273<100){
    //     console.log('273<100 => true');
    // }
    // console.log('종료');
//---------------------------------------
    //  if문
    // const date = new Date();
    // const hour = date.getHours();

    // if(hour<12){
    //     console.log('오전입니다.')
    // }

    // if(hour>=12){
    //     console.log('오후입니다.')
    // }
//---------------------------------------
    // if else문
    // const date = new Date()
    // const hour = date.getHours()

    // if(hour<12){
    //     console.log('오전입니다.')
    // }
    // else{
    //     console.log('오후입니다.')
    // }
//---------------------------------------
    //2중첩 if else문
    // const date = new Date()
    // const hour = date.getHours()

    // if(hour<11){
    //     console.log('아침 먹을 시간입니다.')
    // }
    // else{
    //     if(hour<15){
    //         console.log("점심 먹을 시간입니다.")
    //     }
    //     else{
    //         console.log("저녁 먹을 시간 입니다.")
    //     }
    // }
//----------------------------------------
    //if else if문 [다수 조건 일때]
    // const date = new Date()
    // const hour = date.getHours()

    // if(hour < 11){
    //     console.log("아침 먹을 시간 입니다.")
    // } else if(hour<15){
    //     console.log("점심 먹을 시간 입니다.")
    // }else{
    //     console.log("저녁 먹을 시간 입니다.")
    // }
//----------------------------------------
//p.140 4번
    // const a = Number(prompt('숫자를 입력해 주세요.'))

    // if(a>0){
    //     console.log("입력한 숫자는 양수 입니다.")
    // } else if(a==0){
    //     console.log("입력한 숫자는 0 입니다.")
    // } else{
    //     console.log("입력한 숫자는 음수 입니다.")
    // }
//----------------------------------------
//p.140 5번
        // const a = Number(prompt("숫자를 입력해주세요."))
        
        // if(a%2==0){
        //     console.log("입력한 숫자는 짝수 입니다.")
        // }else{
        //     console.log("입력한 숫자는 홀수 입니다.")
        // }
//----------------------------------------
//p.141 6번
        // const a = Number(prompt("월을 입력해 주세요"))

        // if(3<=a && a<=5){
        //     console.log("봄입니다.")
        // }else if(6<=a&&a<=8 ){
        //     console.log("여름입니다.")
        // }else if(a>=9 && a<=11){
        //     console.log("가을입니다.")
        // }else if(a==12|| a<=2){
        //     console.log("겨울입니다.")
        // }
//-----------------------------------------
// 경우의 수와 변수