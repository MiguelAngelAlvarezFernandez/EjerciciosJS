/**
 * Declara unha variable ou constante "resposta" e asígnalle o obxeto obtido 
 * empregando document.querySelector e o selector p#capturame.
 */

// Escribe aquí o teu código.
const entradaDoTexto=document.querySelector("textarea")
const saidaDoResultado=document.querySelector("p#enMaiusculas")

function actualizaSaidaEnMaiusculas(){
    const textoIntroducido = entradaDoTexto.value
    const textoEnMaiusculas =  textoIntroducido.toUpperCase()
    saidaDoResultado.innerText = textoEnMaiusculas
    /* Las lineas 11 a 13 se podrían escribir en una sola linea de la siguiente forma: 
    saidaDoResultado.innerText = entradaDoTexto.value.toUpperCase()
    */
}

entradaDoTexto.addEventListener("input", actualizaSaidaEnMaiusculas)

/**
 * Non cambies nada despois destas liñas
 */
export { entradaDoTexto, saidaDoResultado, actualizaSaidaEnMaiusculas }