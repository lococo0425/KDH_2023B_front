
//[p.321]
document.addEventListener('DOMContentLoaded', ()=>{
    const divA = document.querySelector("#first")
    const divB = document.querySelector("#second")
    const h1 = document.createElement('h1')
    h1.textContent = '이동값'

    const toFirst = () =>{
        divA.appendChild(h1)
        setTimeout(toSecond, 1000);
    }

    const toSecond = () => {
        divB.appendChild(h1)
        setTimeout(toFirst,1000)
    }
    toFirst()
})

//removeChild()  -> 부모 객체.removeChild(자식객체)   -> 문서객체.parentNode.removeChlid(문서객체)

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        const h2 = document.querySelector('h2')

        h2.parentNode.removeChild(h2);
    },3000);
})


//.addEventListener!!
document.addEventListener('DOMContentLoaded',function(){
    let counter = 0;
    const h3 = document.querySelector("h3")

    h3.addEventListener('click',function event(){
        counter++;
        h3.textContent = `클릭 횟수 : ${counter}`
    })
})
