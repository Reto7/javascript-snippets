/**
 * Created by user on 30.04.2017.
 */

//ECMAScript gibt vier Techniken für die Definition von Funktionen vor:

//---------------------------
//Deklaration
//---------------------------
function sum(a, b) {
    return a + b;
}
//---------------------------
//Anonyme Funktion oder Funktions-Ausdruck
//---------------------------
var sum = function(a, b) {
    return a + b;
}
//---------------------------
//Selbst-aufrufende Funktion
//---------------------------
(function(a, b) {
    return a + b;
})();
//---------------------------
//Konstruktor-Methode
//---------------------------
var sum = new Function('a','b', 'return a + b');
alert(sum(10, 20)); //alerts 30