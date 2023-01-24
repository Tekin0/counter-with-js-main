//increas
document.getElementById('plus').addEventListener("mousedown",()=>{text.innerHTML = Number(text.innerHTML)+1})

//decrease
document.getElementById('minus').addEventListener("mousedown",()=>{text.innerHTML -= 1})

//color chance
const btns = document.querySelectorAll('button')
btns.forEach((element)=>{
    element.addEventListener("mousedown",()=>{

        if(text.innerHTML > 0){
            text.style.color = 'green'
        }
        else if(text.innerHTML < 0){
            text.style.color = 'red'
        }
        else if(text.innerHTML == 0){
            text.style.color = 'black'
        }
    })
})


// zero
function zero(){
    text.innerHTML = 0
    text.style.color = 'black'
}