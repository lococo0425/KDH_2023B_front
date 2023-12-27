//1. HTML의 내용이 모두 로드 되었을때
document.addEventListener('DOMContentLoaded', function(){
    //2.특정 html 요소를 객체로 호울
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');
    //.3 textarea 요소의 이벤트 등록
    textarea.addEventListener('keyup', function(e){
        //event : 매개변수로 이벤트의 정보(keyup)를 받음
        console.log(e.code);
        console.log(e.keyCode);
        console.log(e.altKey)
        console.log(e.ctrlKey)
        console.log(e.shiftKey);
    //4. 글자수 등록
    const length = textarea.value.length;
    //5. 대입
    h1.textContent = `글자 수 : ${length}`;
    });


})

document.addEventListener('DOMContentLoaded',function(){
    const star = document.querySelector('h2');
    star.style.position = 'absolute'

    let[x,y] = [0,0]
    const block = 20
    const print = function(){
        star.style.left=`${x*block}px`
        star.style.top=`${y*block}px`
    }
    print()

    const [left, up, rigth, down] = [37, 38, 39, 40]
    document.body.addEventListener('keydown', function(e){
       if(e.keyCode==left){x--}
       else if(e.keyCode==up){y--}
       else if(e.keyCode==rigth){x++}
       else if(e.keyCode==down){y++}
       else{}
        print()
    })
})