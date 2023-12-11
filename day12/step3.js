
/* 
    -지역 변수의 특징 
        { } 안에서 선언된 변수/상수는 { } 밖으로 나올 수 없다. 
        { } 안에서 선언된 변수/상수는 { } 안으로 들어갈 수 있다.

    =============================== JS 구역 [전체 구역] ===============================

    let 변수1 = 30;


        ===========================     함수{} 구역     ===============================
    function 함수(){
        let 변수2 = 40;
        console.log(변수1) //O
    }

        ===========================     제어문{} 구역   ===============================
    if(조건){
        let 변수3=50;
        console.log(변수1);
        console.log(변수2); // X
    }
    ===============================      JS 구역        ===============================





*/


console.log(('js열림'));

const 회원배열 = [] ; //회원 이름을 저장하는 배열
                     // 여러 { } 에서 호출/사용 해야 하므로 전역 으로 사용한다.
                     // 1번만 선언 되어야 하므로 전역으로 사용한다. [왜? : 선언이 계속되면 초기화되서 누적 불가능]


function 회원등록(){
    console.log('회원등록함수 실행');

    //1.[입력]
        // 1. [입력] : input로 부터 입력받은 값[value] 호출 해서 name상수 저장.
        const name = document.querySelector('#nameInput').value;  


        if( 회원배열.indexOf( name ) >= 0 ){ alert('현재 등록된 이름입니다.[중복]');    return; }
        if( name.length != 3 ){ alert('회원명 3글자로 입력해주세요.'); return; }
        if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2] ) ){ alert('숫자를 입력할수 없어요.'); return;}
    
    회원배열.push( name ); // 입력된 값을 배열에 추가 

    // 3. [출력]
    document.querySelector('#nameList').innerHTML = 회원배열;
    // [ 부가기능1] 등록후 input 상자 초기화 [ input에 value에 빈문자열 넣어주기 ]
    document.querySelector('#nameInput').value ='';
}//function end

function 회원삭제(){ //function s
    console.log("회원삭제함수");
    //1. [입력]
    const name =document.querySelector('#nameInput').value;
    //2. [처리] 삭제 처리
        //입력한 값이 존재하면 삭제, 없으면 없다고 출력
    

    let deleteIndex = 회원배열.indexOf(name) //삭제할 인덱스 위치 
        if(deleteIndex !== -1){ //.indexOf를 통해서 존재 여부 확인 있으면 0이상의 인덱스 위치 반환 없으면 -1
            회원배열.splice(deleteIndex , 1); alert("삭제 했습니다.");

        }else{alert("존재하지 않습니다.");}
    //3. [출력]
    document.querySelector('#nameList').innerHTML = 회원배열;
    document.querySelector('#nameInput').value ='';

}//function e



