/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código.
const entradaDoTexto = document.querySelector("textarea")
const saidaNumeroCaracteres = document.querySelector("#numeroCaracteres")
const saidaNumeroPalabras = document.querySelector("#numeroPalabras")

function actualizaNumeroCaracteres(){
    const obterString = entradaDoTexto.value
    const lonxitudeString = obterString.length
    saidaNumeroCaracteres.innerText =  lonxitudeString
}

entradaDoTexto.addEventListener("input", actualizaNumeroCaracteres)

function actualizaNumeroPalabras(){
    const obterString = entradaDoTexto.value
    const stringFragmentado = obterString.split(" ")
    const numeroPalabras = stringFragmentado.length
    saidaNumeroPalabras.innerText = numeroPalabras
}

entradaDoTexto.addEventListener("input", actualizaNumeroPalabras)

/**
 * Non cambies nada despois destas liñas
 */
export {
    entradaDoTexto,
    saidaNumeroCaracteres,
    saidaNumeroPalabras,
    actualizaNumeroCaracteres,
    actualizaNumeroPalabras
}