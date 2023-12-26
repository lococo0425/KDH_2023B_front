console.log(document.querySelector('img'))

document.addEventListener('DOMContentLoaded',function(){

    console.log(document.querySelector("img"))
    //1. class가 'rect' 인 요소를 여러개 호출
    const rects = document.querySelectorAll('.rect')
    //2. rects/배열 하나씩 순서대로 호출 반복
    for(let i =0; i<rects.length; i++){
        const width = (i+1)*100; // 가로 사이즈 계산
        const src = `http://placekitten.com/${width}/250`
        rects[i].setAttribute('src',src)
        //rects[i].src = src //표준속성 
    }


    //[p.318]
    const divs = document.querySelectorAll('body>div');
    for(let i=0; i<divs.length; i++){
        console.log(i, divs[i]);
        const val = i*10;
        divs[i].style.height = '10px';
        divs[i].style.backgroundColor = `rgba(${val},${val},${val})`;
    }

    //p.320
    const header = document.createElement('h1'); //h1 요소 생성
        console.log(header)
        header.textContent = '문서객체 동적으로 생성하기'
        header.setAttribute('date-custom', '사용자 정의 속성')
        header.style.color='white'
        header.style.backgroundColor='black'
    document.body.appendChild(header);

})






