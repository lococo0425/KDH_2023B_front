

document.addEventListener('DOMContentLoaded',function(){
    const input = document.querySelector("input")
    const button = document.querySelector("button")
    const p = document.querySelector("p")

    button.addEventListener('click',function(){
        const inch = Number(input.value)
        if(isNaN(inch)){
            p.textContent =`숫자를 입력하세요`
            return
        }

        const cm = inch*2.54;
        p.textContent = `${cm}cm`
    })

})