'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates          *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math    *
 *                                                                                          *
 ********************************************************************************************/



/******************************************************************************************** 
* * 
* Plese read the following tutorial before implementing tasks: * 
* https://developer.mozilla.org/en-US/docs/Web/JavaScri.. * 
* https://developer.mozilla.org/en-US/docs/Web/JavaScri.. * 
* https://developer.mozilla.org/en-US/docs/Web/JavaScri.. * 
* * 
********************************************************************************************/ 





 
function getLinearEquationRoot(a, b) { 
return -(b/a); 
} 


function getAngleBetweenVectors(x1, y1, x2, y2) { 
var a=y1*x1+y2*x2; 
var x=Math.sqrt(Math.pow(x1, 2)+Math.pow(x2, 2)); 
var y=Math.sqrt(Math.pow(y1, 2)+Math.pow(y2, 2)); 
var z=x*y; 
return Math.round(Math.cos(a/z)); 

} 


function getLastDigit(value) { 
var lastDigit = value % 10; 
return lastDigit; 
} 


function parseNumberFromString(value) { 
var res = +value; 
return res; 
} 

function getParallelipidedDiagonal(a,b,c) { 
var res= Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)+Math.pow(c, 2)); 
return res; 
}










function getRectangleArea(width, height) { 
return width*height; 
} 

function getCicleCircumference(radius) { 
return radius*2*Math.PI; 
} 

function getAverage(value1, value2) { 
return ((value1+value2)/2); 
} 

function getDistanceBetweenPoints(x1, y1, x2, y2) { 
var a = x1 - x2; 
var b = y1 - y2; 

var c = Math.sqrt( a*a + b*b ); 
return c; 
} 

 
function getLinearEquationRoot(a, b) { 
return -(b/a); 
} 



/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *  
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
    throw new Error('Not implemented');
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 * 
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
    throw new Error('Not implemented');
}

/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(value, def) {
    throw new Error('Not implemented');
}

module.exports = {
    getRectangleArea: getRectangleArea,
    getCicleCircumference: getCicleCircumference,
    getAverage: getAverage,
    getDistanceBetweenPoints: getDistanceBetweenPoints,
    getLinearEquationRoot: getLinearEquationRoot,
    getAngleBetweenVectors: getAngleBetweenVectors,
    getLastDigit: getLastDigit,
    parseNumberFromString: parseNumberFromString,
    getParallelipidedDiagonal: getParallelipidedDiagonal,
    roundToPowerOfTen: roundToPowerOfTen,
    isPrime: isPrime,
    toNumber: toNumber
};
