const piano = document.querySelector('#piano');
const data = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

let html =''
for (let octave=0; octave<2; octave++){
    for(let i=0; i<data.length; i++){
        let hasSharp = (data[i]!='E' && data[i]!='B') ? true : false
        html+=`<div class="whiteNote" data-code='${data[i]}${octave+4}'>`
        if(hasSharp){
            html+=`<div class='blackNote' data-code='${data[i]}#${octave+4}'></div>`
        }
        html+=`</div>`
    }
}
piano.insertAdjacentHTML('beforeend', html)

const notes = document.querySelectorAll('.whiteNote, .blackNote')
const keys = ["q", "z", "s", "e", "d", "f", "t", "g", "y", "h", "u", "j", "k", "i", "l", "o", "m", "p", "ù", "w", "=", "]", "Backspace", "\\"]

document.addEventListener('keydown',(e)=>{
   // e.preventDefault()
    keys.forEach((key,index)=>{
        if(e.key==key){
            notes[index].style.background = (notes[index].classList.contains('whiteNote')) ? "#ccc" : "black"
        }
    })
})

document.addEventListener('keyup',(e)=>{
    keys.forEach((key,index)=>{
        if(e.key==key){
            notes[index].style.background = (notes[index].classList.contains('whiteNote')) ? "white" : "#777"
        }
    })
})