document.addEventListener('DOMContentLoaded', function(){
    const select = document.querySelector('select')
    const p = document.querySelector('p')

    select.addEventListener('change', function(event){
        const options = event.currentTarget.options
        const list = []
        for (const option of options) {
            if(option.selected){
                list.push(option.textContent)
            }
        }
        p.textContent = `가게 요청사항: ${list}`
    })
})