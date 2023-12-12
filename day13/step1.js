
//1. 아이디를 저장하는 배열
const idArray = [];
//2. 패스워드 저장하는 배열
const pwArray = [];
//=====================1.회원가입 함수=====================
function 회원가입(){ //function s // 선언부 // 실행조건 : 가입버튼을 클릭했을때.
    //1.[입력] document.querySelector('선택자').value
    const signId = document.querySelector('#signId').value
    const signPw = document.querySelector('#signPw').value
    //2.[처리]
    idArray.push(signId)
    pwArray.push(signPw)
    //3.[출력]
    alert("회원가입이 되었습니다.");
    document.querySelector('#signId').value=""
    document.querySelector('#signPw').value=""
}//function e

//=====================2. 로그인 함수=====================
function 로그인(){//function s //선언부 // 실행조건 : 로그인버튼을 클릭했을때.
    //1.[입력]
    const loginId = document.querySelector("#loginId").value
    const loginPw = document.querySelector("#loginPw").value
    //2.[처리]  배열명.indexOf(값)
    const sIndex = idArray.indexOf(loginId);
    if(sIndex >=0 &&pwArray[sIndex]==loginPw){
        //1. 만약에 입력받은 로그인 아이디가 배열 내 존재하면
        //2. 찾은 아이디 인덱스의 패스워드도 동일한지.
    //3.[출력]
        alert('로그인 성공')
    }else{
        alert('동일한 회원 정보가 없습니다.')
    }
}//function e 

/* 
    변수 선언 : let 변수명 = 10;
    상수 선언 : const 상수명 = 10;
    배열 선언 : let/const 변수/상수명 = [] 
    함수 선언 : function 함수명(){}

    변수호출 : 변수명
    상수호출 : 상수명
    배열호출 : 변수/상수명  또는 변수/상수명[인덱스]
    함수호출 : 함수명()
*/