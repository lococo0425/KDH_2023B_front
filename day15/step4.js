

const 날짜목록 = [];
const 항목목록 = [];
const 금액목록 = [];


function 등록함수(){

    const content1 = document.querySelector('#w').value;
    const content2 = document.querySelector('#l').value;
    const content3 = document.querySelector('#p').value;

    날짜목록.push(content1)
    항목목록.push(content2)
    금액목록.push(content3)
    
    document.querySelector("#w").value; alert("등록완료")

    console.log(날짜목록); console.log(항목목록); console.log(금액목록);
    출력함수()

}

function 삭제함수(삭제할인덱스){
    console.log("삭제")
    날짜목록.splice(삭제할인덱스,1)
    항목목록.splice(삭제할인덱스,1)
    금액목록.splice(삭제할인덱스,1)
    출력함수()
}

function 출력함수(){
    console.log("출력")
    const moneyOut = document.querySelector("#moneyOut")
    let html =``;
        for(let i=0; i<항목목록.length;i++){
            html += `<div class="MoneyOut">
                    <div>${날짜목록[i]}</div>
                    <div>${항목목록[i]}</div>
                    <div>${금액목록[i]}</div>
                    <div class="button">
                      <input onclick="삭제함수()" type="button" value="삭제">
                    </div></div>`
        }

    moneyOut.innerHTML = html ;
    합계()
}

function 합계() {
    console.log("합계함수실행")
    const tPr = document.querySelector("#tPr");
    let html1 =``
    let a=0;
    for(let i = 0 ; i<=금액목록.length-1;i++){
    a += Number(금액목록[i]);
    }
    
    html1 += `${a}`;
    
    tPr.innerHTML =`총 합계 :  ${html1}`;
}