//-!!! : 배열의 인덱스는 절대적인 식별자 역할 할수 없다.
    //식별자 : 절대적으로 식별할수 있는 고정 값 + 중복 없어도 한다. 

const 전국영화관 = [
    {지점코드번호 : 1, 지점명:'안산센트럴락', 주소:'고잔로123',
                    영화 : ['서울의봄','노량','싱글인서울']},
    {지점코드번호 : 2, 지점명:'안산고잔',주소:'고잔로123', 영화 : ['아쿠아맨','노량']},
    {지점코드번호 : 3, 지점명:'안산롯데시네마',주소:'고잔로123', 영화 : ['싱글인서울']}
]
전국영화관출력();

function 전국영화관출력(){
    let 전국영화관출력구역 = document.querySelector("#전국영화관출력구역");
    let html ="";

    for(let i=0; i<전국영화관.length;i++){
        html += `<span style="margin:10px"
                     onclick="영화출력(${전국영화관[i].지점코드번호})">
                     ${전국영화관[i].지점명}</span>`
    }
    전국영화관출력구역.innerHTML =html;

}

function 영화출력(선택한지점코드번호){
    let 영화출력구역 = document.querySelector("#영화출력구역");
    
    let html = '';
    for(let i=0; i<전국영화관.length; i++){
        if(전국영화관[i].지점코드번호==선택한지점코드번호){
            for(let j=0; j<전국영화관[i].영화.length; j++){
                html += `<span style="margin:10px" 
                        onclick="">
                        ${전국영화관[i].영화[j]}</span>`
            }
        }
    }

    영화출력구역.innerHTML = html;

}
