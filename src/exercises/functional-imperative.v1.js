// functional vs imperative

// 1
// Schreibe eine Funktion die alle Zahlen in eines Arrays summiert.
// z.B. sum([1,2,3]) => 6
// Schreibe eine funktionale und eine imperative Variante.
console.log("------------------------------------")
let arrayAufgabe1 = [1,2,3]


// (A) FUNKTIONAL
let sumA = 0;
for (let i=0; i<arrayAufgabe1.length; i++) {
    //console.log("A:" +arrayAufgabe1[i]);
    //sumA = sumA + arrayAufgabe1[i];
    sumA += arrayAufgabe1[i];
}
console.log("Summe (A): " + sumA);

// (B) IMPERATIV
let sumB = 0;
for (let zahl of arrayAufgabe1){    // TODO ... ??? wieso von 0 startend ???
    // keine Ahnung wieso, muss in Number konvertiert werden, sonst ist das Gesamtresultat "0012" ...
    zahl = Number(zahl);
    //console.log("B:" +zahl);
    //sumB = sumB + zahl;
    sumB += zahl;
}
console.log("Summe (B): " + sumB);


// (B2) IMERATIV Loesung von Ueli --> da gibt es auch "0012" zurueck, zum Glueck auch falsch...
let sum = (arr)=>{
    let summe = 0
    for(let val in arr){
        summe += val
    }
    return summe
}
let s = sum([1,2,3])
console.log("Summe (B2): " + s);





// 2
// Schreibe eine Funktion die einen Array von Zahlen entgegen nimmt und einen Array mit Booleans zurückgibt.
// Die Funktion ermittelt für jede Zahl ob diese Gerade ist oder nicht.
// z.B. even([1,2,3]) => [false, true, false]
// Schreibe eine funktionale und imperative Variante.
console.log("------------------------------------")
let zahlenArray = [1,2,3,4,5]

// (A) FUNKTIONAL
let loesungsArrayA = [];
for (let i=0; i<zahlenArray.length; i++) {
    //console.log("A:" + zahlenArray[i]);
    loesungsArrayA.push(zahlenArray[i]);
    if (zahlenArray[i] % 2 === 0) {   //  % modulo
        //console.log(zahlenArray[i] + "ist gerade")
        loesungsArrayA.push(true);
    } else {
        loesungsArrayA.push(false);
    }
}
console.log("LoesungsArray (A): " + loesungsArrayA);

// (B) IMPERATIV
let loesungsArrayB = [];
for (let z of zahlenArray) {  // TODO ... ??? wieso von 0 startend ???
    //console.log("B:" + z);
    loesungsArrayB.push(z);
    if (z % 2 === 0) {   //  % modulo
        //console.log(z + "ist gerade")
        loesungsArrayB.push(true);
    } else {
        loesungsArrayB.push(false);
    }
}
console.log("LoesungsArray (B): " + loesungsArrayB);

// (B2) IMERATIV Loesung von Ueli: ok
let even = (arr)=>{
    let result = [],
        isEven
    for(let val of arr){
        isEven = val % 2 === 0
        result.push(isEven)
    }
    return result
}
let e = even(zahlenArray)
//console.log("LoesungsArray (B2): " + e);