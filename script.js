const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

let msgInfo = document.querySelector('#msgInfo')
let msgSuccess = document.querySelector('#msgSuccess')



button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    msgInfo.setAttribute('style', 'display: block')
    msgInfo.innerHTML = '<strong> Dia já incluso </strong>'
    setTimeout(function() {
      msgInfo.setAttribute('style', 'display: none')
    }, 5100);
    return
   
  } else{
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong> Adicionado com sucesso </strong>'
    setTimeout(function() {
      msgSuccess.setAttribute('style', 'display: none')
    },5100);
    
  }

  
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
