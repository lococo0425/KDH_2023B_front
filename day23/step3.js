const category = [
    {pno : 1, pname:'떡볶이', price : 3000},
    {pno : 3, pname:'순대', price : 1000},
    {pno : 5, pname:'튀김', price : 2000},
    {pno : 7, pname:'오뎅', price : 4000}
]


const cart = []

function 담기(){
    const selectBox = document.querySelector("#selectBox")
    const value = selectBox.value;
    cart.push({pno : value})
}

document.addEventListener("DOMContentLoaded",function(){

    const selectBox = document.querySelector("#selectBox")
    let html=``;
    for(let i=0; i<category.length; i++){
        html += `<option value = ${category[i].pno}${category[i].pname}</option>`
    }
    selectBox.innerHTML = html;


    const select = document.querySelector('select');
    const p = document.querySelector('p')
    select.addEventListener('change', function(event){
        console.log(event);                                                         // change 이벤트 결과정보 객체
        console.log(event.currentTarget);                                           // change 이벤트를 발생시킨 요소
        console.log(event.currentTarget.options);                                   // select 하위 요소들 /배열 반환
        console.log(event.currentTarget.options.selectedIndex);                     // select 요소의 선택된 인덱스 
        //[방법1]
        const options = event.currentTarget.options;
        const index = event.currentTarget.options.selectedIndex

        p.textContent = `선택 : ${options[index].textContent}`


        //[방법2]
        console.log(select.value)
        p.textContent = `선택 : ${select.value}`
    })
})


document.addEventListener('DOMContentLoaded',function(){
    let 현재값
    let 변환상수 = 10;

    const select = document.querySelector('select:nth-child(3)');
    const input = document.querySelector('input');
    const span = document.querySelector('span');

    const calculate = function(){
        span.textContent = (현재값 * 변환상수).toFixed(2)
    }

    select.addEventListener('change',function(event){
        const options = event.currentTarget.options
        const index = event.currentTarget.options.selectedIndex
        변환상수 = Number(options[index].value);
    
        calculate()
    })
    input.addEventListener('keyup',(event) => {
        현재값 = Number(event.currentTarget.value)
        calculate()
    })
})