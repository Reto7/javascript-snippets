// 1
// Implementiere einen Array Iterator, der einen Array rückwärts interiert.
// Versuche zwei Varianten zu finden.
let arr = ['a','b','c'];

// TODO  : soll mit  [Symbol.iterator](){} geloest werden!   -- siehe Beispiel!

// 1-v1
console.log('-1-v1-----------------------')
for(let i=arr.length-1; i>=0; i--) {
    console.log(arr[i])
}

// 1-v2
console.log('-1-v2-----------------------')
function reverseIterator1(arr) {
    return arr.reverse();
}
for (let x of reverseIterator1(arr) ) {
    console.log(x)
}
// somit ok:


// 1-v3


// 2 
// Schreibe eine Funktion forFun, welche
// - ein Objekt welches Symbol.iterator implementiert
// - und eine callback Funktion
// entgegen nimmt.
// Iteriere über das iterable Objekt und rufe den Callback für jeden Wert auf, 
// solange bis alle Elemente iteriert sind.

console.log('-2-v1-----------------------')
// 1-v2
// class Klasse {
//     constructor(myArray) {
//         this.myArray = myArray
//     }
//
//     [Symbol.iterator](){}
//
// }
//
// let k1 = new Klasse(arr)
// console.log(arr.length)
// for (let x of arr){
//     console.log(x)
// }
