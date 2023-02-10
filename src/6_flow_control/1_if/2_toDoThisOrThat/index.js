/**
 * Exercise:
 * 
 * Write a function "saludarAs" that gets a argument called
 * "horaActual" and returns "Bos días" if "horaActual is
 * between 7 and 19 but returns "Boas noites" if not.
 * 
 */

function saludarAs(horaActual) {
    if ( horaActual > 7 && horaActual <= 19 ) {
        // Your code here
        return"Bos días"
    } else {
        // Your code here
        return"Boas noites"
    }
}

/**
 * Don't to change next lines.
 */
module.exports = { saludarAs }
