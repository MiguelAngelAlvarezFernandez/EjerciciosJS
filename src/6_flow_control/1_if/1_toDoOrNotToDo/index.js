/**
 *
 * Example:
 * 
 * function productoDosNumeros(numero1, numero2) {
 *      if (
 *          typeof(numero1) === "number"
 *          && typeof(numero2) === "number"
 *      ) {
 *          return numero1 * numero2
 *      }
 * }
 * 
 * Exercise:
 * 
 * Write a function "divisionDe" that recives two values and
 * returns the values division only if both are numbers and 
 * second one is not zero.
 * 
 */

// Your code here
function divisionDe(n1, n2) {
    if(
        typeof(n1) === "number"
        && typeof(n2) === "number"
        && n2 !== 0
    ) {
        return n1/n2
    }
}

/**
 * Don't to change next lines.
 */
module.exports = { divisionDe }