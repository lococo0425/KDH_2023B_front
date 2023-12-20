/* 
    설계
    1.경험
    2.기능 실행순서
    3.기능에 필요한 메모리(저장-DB설계) 설계
    4.배열 안에 있는 데이터를 식별할때 기준점
*/



//백엔드 받았다고 하고 
//전역변수
//1.카테고리 목록
let categoryArray=[
    {cno : 1, cname : '신제품(new)'},
    {cno : 2, cname : '프리미엄'},
    {cno : 3, cname : '와퍼&주니어'},
    {cno : 4, cname : '치킨&쉬림프버거'},
    {cno : 5, cname : '올데이킹&킹모닝'}
]

//2. 제품목록 (*제품 이미지명은 사진 파일과 동일하게 합니다.)
let productArray= [
    {pno : 1, pName : '큐브 스테이크 와퍼', pPrice : 9500, pImg : '큐브 스테이크 와퍼.png' , cno : 1},
    {pno : 2, pName : '블양양맥시멈3', pPrice : 10500, pImg : '블양양맥시멈3.png', cno : 4},
    {pno : 3, pName : '블양양맥시멈4', pPrice : 12500, pImg : '블양양맥시멈4.png', cno : 5},
    {pno : 4, pName : '블양양맥시멈2', pPrice : 9500, pImg : '블양양맥시멈2.png', cno : 5}
]

let cartArray = []; //카트목록

//[함수1]카테고리 출력하기(실행조건 : 스크립트가 열렸을때 카테고리가 선택됐을때)
printCategory(1) //함수 실행  //최초 실행시 선택카테고리 cno = 1 가정
function printCategory(selectCno){
    console.log("printCategory()함수실행")
    //1.어디에
    const categoryUl = document.querySelector("#header >ul");
    //2.무엇을 
        html = ``;
        for(let i=0; i<categoryArray.length;i++){
            //만약에 i 번째 카테고리의 cno와 내가 선택한 cno가 같으면 
            html += `<li onclick="printCategory(${categoryArray[i].cno})" 
                                class="${categoryArray[i].cno==selectCno ? 'selectMenu':''}">
                                ${categoryArray[i].cname}
                    </li>`
        }

    //3.출력
        categoryUl.innerHTML =html;

        printProduct(selectCno);
        

}

//[함수2]제품 출력하기(실행조건 :카테고리가 출력됐을때)
printProduct(1);
function printProduct(selectCno){
    console.log("printMenu()함수실행")

    //1.어디에
    const product = document.querySelector("#productBox");
    //2.무엇을
    html = ``;
    
    for(let i=0; i<productArray.length;i++){
        if(productArray[i].cno == selectCno){
        html += `<div onclick="setCart(${productArray[i].pno})" class="product">
                    <img src="img/${productArray[i].pImg}"/>
                    <div class="pInfo">
                        <div class="pName">${productArray[i].pName}</div>
                        <div class="pPrice">${productArray[i].pPrice.toLocaleString()}원</div>
                    </div>
                </div>`
        }
    }
    //3.출력
    product.innerHTML = html;
}

 
//[함수3]제품선택시 카트에 제품 담기 (실행조건 : 제품을 클릭했을때)
function setCart(selectPno){ //함수선언
    console.log('setCart()'+selectPno)
    //1.입력
    //2.처리
    cartArray.push(selectPno); console.log(cartArray)
    //3.출력
       printCart()
}

//[함수4] 카트에서 x버튼 클릭시 카트에서 삭제하기 (실행조건 : x 버튼 누르면 카트에서 해당 품목 삭제) 
function cartDelete(deleteindex){
    //1. 입력 --> 매개변수로 선택된 삭제인덱스
    cartArray.splice(deleteindex ,1);

   printCart()
}

//[함수5] 장바구니 카트 출력하기 
function printCart(){
    //1.어디에 ->cartBottom
    const cartBottom = document.querySelector("#cartBottom");
    //2.무엇을 ->html을
    html = ``;

    let totalPrice = 0; //카트내 제품 총 금액
    let cartCount = cartArray.length //카트내 pno갯수

    for(let i=0; i<cartArray.length; i++){
        //해당 i번째 pno 제품의 정보 찾기
        for(let j=0; j<productArray.length; j++){
            if(cartArray[i]==productArray[j].pno){
            
                html += `<div class="citem">
                        <div>${productArray[j].pName}</div>
                        <div>${productArray[j].pPrice.toLocaleString()}원</div>
                         <span onclick="cartDelete(${i})">X</span>
                        </div>`
                //총합계 누적 
                totalPrice += productArray[j].pPrice
            }
        }
    }
    console.log(totalPrice);
    //3.출력
    cartBottom.innerHTML =html
    //개수, 총가격 출력 
    document.querySelector("#count").innerHTML=cartCount;
    document.querySelector("#total").innerHTML=totalPrice.toLocaleString()+"원";
}



//.관리자 구역

//1. 카테고리 추가하기 
    function plusC(){
        //1.입력  -> 매개변수
        
        //2.저장
        const plusCnonum =document.querySelector("#plusC>.cnonum").value
        const categoryText =document.querySelector("#plusC>.categoryText").value
        
        const Cobject = {cno:Number(plusCnonum),cname: categoryText}
        
        categoryArray.push(Cobject);

        //3.출력
        console.log(categoryArray);
        printCategory()

    }
//2.제품 추가하기
    function plusP(){
        const plusCnonum = document.querySelector("#plusP > .Pcno").value
        const plusPnonum = document.querySelector("#plusP > .Ppno").value
        const plusPtext = document.querySelector("#plusP > .Ptext").value
        const plusPprice = document.querySelector("#plusP > .Pprice").value
        const plusPimg = document.querySelector("#plusP > .Pimg").value

        const Pobject = {pno : Number(plusPnonum), pName : plusPtext , pPrice :Number(plusPprice) , pImg : plusPimg , cno : Number(plusCnonum)}

        productArray.push(Pobject);

        console.log(productArray);
        printProduct(plusCnonum)
    }

//3. 결제구현하기 


/* 

결제 내역 배열 객체 구성  
장바구니 내역을 결재라는 배열에 넣고 출력하기

*/

const payment = [];

function payMent(){
    payment.push(cartArray)
    console.log(payment)
}