//이벤트 제거하기
document.addEventListener('DOMContentLoaded', function () {
    let counter =0;
    let isConnect = false;

    const h4 = document.querySelector('h4')
    const p = document.querySelector('p')
    const connectButton = document.querySelector("#connect")
    const disconnectButton = document.querySelector("#disconnect")

    const listener = (event)=>{
        
        h4.textContent = `클릭횟수 : ${counter++}`
    }

    connectButton.addEventListener('click',()=>{
        if(isConnect===false){
            h4.addEventListener('click',listener)
            p.textContent = '이벤트 연결 상태 : 연결'
            isConnect=true
        }
    })
    disconnectButton.addEventListener('click',()=>{
        if(isConnect===true){
            h4.removeEventListener('click',listener)
            p.textContent = '이벤트 연결 상태 : 해제'
            isConnect=false
        }
    })
})