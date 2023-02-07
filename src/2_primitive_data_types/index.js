/**
 * JavaScript can work with many types of data.
 * Primitives are the simplest types of data who JavaScript can handle.
 * Most common primitives are:
 * - numbers, like 1 or 1.5
 * - strings like "Hello world"
 * - boolean can be true or false
 * - undefined is the kind of data when no data are provided.
 * - null is the kind of data for avoiding providing data. 
 * 
 * Exercise:
 * Declare five variables and assing values to each:
 * - Assign a number to myNumber.
 * - Assign a string to myString.
 * - Assign a boolean to turnedOn.
 * - Declare the noValue variable and assign no value to it (undefined).
 * - Declare the unknownValue variable and assign null value to it.
 */

// Write your code here.
let myNumber = 5
let myString = "string"
let turnedOn = true
let noValue /*Al no asignar valor JS le asigna automáticamente el valor undefined mientras no se asigne uno concreto*/
let unknownValue = null

/**
 * Don't to change next lines.
 */
module.exports = {
    myNumber,
    myString,
    turnedOn,
    noValue,
    unknownValue,
}