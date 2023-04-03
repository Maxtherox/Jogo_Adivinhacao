//Variáveis da aplicação
const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() *10)
let xAttempts = 1

// eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})

// funções callback
function handleTryClick(event){
    event.preventDefault() // não faça o padrão deste evento
    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    xAttempts++

    inputNumber.value = ""
    console.log(xAttempts)
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() *10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

