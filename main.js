
const inputName = document.querySelector("#name")
const material = document.querySelector("#material")
const comments = document.querySelector("#comments")
const send = document.querySelector("#send")
const result = document.querySelector("#result")

send.onclick = () => {
    let size = []

    if (document.getElementById('size1').checked) {
        size.push('Pitufo')
    }
    if (document.getElementById('size2').checked) {
        size.push('Humano')
    }
    if (document.getElementById('size3').checked) {
        size.push('Orco level 75')
    }




    result.textContent = (`${inputName.value} ha pedido una caja de
    ${material.value} con unas dimensiones ${size}. ${comments.value}.`)

}

const secretNum = document.querySelector("#secretNum")
const evaluate = document.querySelector("#evaluate")
const result2 = document.querySelector("#result2")
const winner = document.querySelector("#winner")
let rounds = 0

evaluate.onclick = () => {

    if (secretNum.value > -1 && secretNum.value < 6) {
        rounds++
        secretNum.style.display = "none" 
    }
    if (result2.value != secretNum.value) {
        result2.value = ""
    }    
    if (rounds === 4) {
        secretNum.style.display = "block"
        winner.textContent = "Has fallado el número"
        result2.style.display = "none"
    }
    if (result2.value == secretNum.value && rounds > 0) {
        result2.style.display = "none"
        secretNum.style.display = "block"
        winner.textContent = "WINNER!!!"
    }

}
