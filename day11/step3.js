
//if문 연습문제

//문제 1 3개 점수를 입력받아 총점과 평균 span 에 출력

function 연습버튼을클릭했을때실행되는코드모음상자(){
    //input에 입력 받은 값 가져오기 [document.querySelector()]
    let value1 = document.querySelector("#input1").value;
    let value2 = document.querySelector("#input2").value;
    let value3 = document.querySelector("#input3").value;
    
    let sumValue = Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;


document.querySelector("#result").innerHTML = `${avgValue}점`
}

function 문제2함수(){
    //입력
    let value1 = Number(document.querySelector("#input1").value);
    let value2 = Number(document.querySelector("#input2").value);
    //처리
    let result = "";
    if(value1>value2){result=value1+"가 큽니다.";}
    else if(value1<value2){result=value2+"가 큽니다.";}
    else{result ="두수는 같다";}

    //출력
    document.querySelector("#result").innerHTML = `${result}`
}

//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 
function 문제3함수(){
    let value1 = Number(document.querySelector("#input1").value);
    let value2 = Number(document.querySelector("#input2").value);
    let value3 = Number(document.querySelector("#input3").value);

    let result = ""
    if(value1>value2){result=value1}
    else if(value2<value3){result=value3}
    else{result=value2}

    document.querySelector("#result").innerHTML = `${result}`
}

//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력 
function 문제4함수(){
    let value1 = Number(document.querySelector("#input1").value);

    let result =""
    if(value1>=90){result="합격"}
    else{result="탈락"}

    document.querySelector("#result").innerHTML = `${result}`
}
          
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/
function 문제5함수(){
    let value1 = Number(document.querySelector("#input1").value);

    let result =""
    if(value1>=90){result="A등급"}
    else if(value1>=80&&value1<90){result="B등급"}
    else if(value1>=70&&value1<80){result="C등급"}
    else{result="재시험"}

    document.querySelector("#result").innerHTML = `${result}`

}

/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력
*/
function 문제6함수(){
    let id = document.querySelector("#input1").value;
    let pw = Number(document.querySelector("#input2").value);

    let result ="";
    if((id=="admin")&&(pw==1234)){result = "로그인 성공"}
    else{result = "로그인 실패"}

    document.querySelector("#result").innerHTML =`${result}`
}
//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 

function 문제7함수(){
    let val1 = Number(document.querySelector("#input1").value);
    let val2 = Number(document.querySelector("#input2").value);
    let val3 = Number(document.querySelector("#input3").value);

//     let result = ""
    
//     if(val1<val2){
//         if(val2<val3){
//            result=  document.querySelector("#result").innerHTML =`${val1} ${val2} ${val3}`
//         }else{
//             if(val1<val3){
//                 result= document.querySelector("#result").innerHTML =`${val1} ${val3} ${val2}`
//             }else{result= document.querySelector("#result").innerHTML =`${val3} ${val1} ${val2}`}
//         }
//     }else{if(val2>val3){
//         result= document.querySelector("#result").innerHTML =`${val3} ${val2} ${val1}`
//     }else{if(val1<val3){
//         result= document.querySelector("#result").innerHTML =`${val2} ${val1} ${val3}`
//     }else{
//         result= document.querySelector("#result").innerHTML =`${val2} ${val3} ${val1}`
//     }
//     }
// }
// document.querySelector("#result").innerHTML =`${result}`

    if(val1>val2){let temp=val1; val1=val2; val2=temp; }
    if(val1>val3){let temp=val1; val1=val3; val3=temp; }
    if(val2>val3){let temp=val2; val2=val3; val3=temp; }
    document.querySelector("#result").innerHTML =`${val1} ${val2} ${val3}`







}
