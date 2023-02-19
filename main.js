const btnRojo= document.getElementById('btn1')
const btnDelete= document.getElementById('btn5')

const cardBox= document.getElementById('card-box')

//img
let rojo = "Img/rojo.jpeg"
let azul = "Img/azul.jpeg"

btnRojo.addEventListener('click', ()=>{
    addRojo()
})
btnDelete.addEventListener('click', ()=>{
    deleteBox()
})


//function addRojo
function addRojo(){
    let item = document.createElement('img')
    item.setAttribute('src', `${rojo}`)
    item.classList.add('box')
    cardBox.appendChild(item)
}

//function deleteBox
function deleteBox(){
    cardBox.innerHTML=" "
}