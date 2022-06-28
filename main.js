const panels = document.querySelectorAll('.panel')
const NextBtn = document.querySelectorAll('#panel-next')

NextBtn.forEach((Next) => {
    Next.addEventListener('click',(e)=>{
        removeActiveClasses()        
        Next.parentElement.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}