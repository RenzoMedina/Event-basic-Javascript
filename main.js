//varibales para los botones
const btnRojo = document.getElementById('btn1')
const btnBlue = document.getElementById('btn2')
const updateBlue = document.getElementById('btn3')
const btnDeleteRed = document.getElementById('btn4')
const btnDelete = document.getElementById('btn5')
const cardBox = document.getElementById('card-box')

//img
const rojo = "Img/rojo.jpeg"
const azul = "Img/azul.jpg"

//event mouse to the buttons
btnRojo.addEventListener('click', ()=>{addRojo()})
btnDelete.addEventListener('click', ()=>{deleteBox()})
btnBlue.addEventListener('click', ()=>{addBlue()})
btnDeleteRed.addEventListener('click', ()=>{deleteRed()})
updateBlue.addEventListener('click', ()=>{upBlues()})

//function addRojo
function addRojo(){

    let item = setAttributes('img','src',rojo,'rojo')
    cardBox.appendChild(item)
}
//function deleteBox
function deleteBox(){
    cardBox.innerHTML=" "
}
//function addBlue four object
function addBlue(){
    
    let item = `<img src="${azul}" class="azul">`
    for(let i =0; i<4; i++){        
        cardBox.insertAdjacentHTML('beforeend',item)
    }
}
//function setAttribute
function setAttributes(tipo, attribute,link, clase){

    let item = document.createElement(`${tipo}`)
    item.setAttribute(`${attribute}`,`${link}`)
    item.classList.add(`${clase}`)

    return item
}
//function detele red img
function deleteRed(){
    let count = document.querySelectorAll(".rojo")
    for(let i =0; i < count.length;i++){
        count[i].remove()
    }
}
//function upBlues
function upBlues(){
    let count = document.querySelectorAll(".azul")
    for (let i =0; i < count.length; i++){
        count[i].src=rojo
        count[i].classList.remove('azul')
        count[i].classList.add('rojo')
    }
}