const form = document.getElementById('form-deposito')
const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')

function validaCampo(campoA, campoB) {
  if (campoB > campoA) {
    return true
  } else {
    return false
  }
}

form.addEventListener('submit', function (e) {
  let formEValido = false
  e.preventDefault()

  const mensagemSucesso = 'Formulário válido. Campo B é maior que Campo A'

  formEValido = validaCampo(campoA.value, campoB.value)
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.sucess-message')
    containerMensagemSucesso.innerHTML = mensagemSucesso
    containerMensagemSucesso.style.display = 'block'

    campoA.value = ''
    campoB.value = ''
  } else {
    campoA.style.border = '1px solid red'
    document.querySelector('.error-message').style.display = 'block'
  }
})
