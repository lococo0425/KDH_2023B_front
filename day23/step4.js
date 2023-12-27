document.addEventListener('DOMContentLoaded',function(){
    let [timer, timerId] = [ 0,0]
    const h1 = document.querySelector('h1')
    const checkbox = document.querySelector("input")

    checkbox.addEventListener('change',function(event){
        if(event.currentTarget.checked){
            timerId = setInterval(function(){
                timer += 1
                h1.textContent = `${timer}초`
            },1000)
        }else{
            clearInterval(timerId)
            
        }
    })
})
    


document.addEventListener('DOMContentLoaded',function(){
        const output = document.querySelector("#output")
        const radios = document.querySelectorAll("[name=pet]")

        for(let i=0; i<radios.length;i++){
            radios[i].addEventListener('change', function(event){

                const current = event.currentTarget;
                if(current.checked){
                    output.textContent = `좋아하는 애완동물은 ${current.value}이군요`
                }
            })
        }

})
