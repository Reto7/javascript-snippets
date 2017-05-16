// TODO HAusaufgabe

// 1
// a
// Schreibe eine Funktion calcX,
// - die eine Zahl z zwischen 0 und 1 entgegen nimmt
// - ein Promise retourniert, welches bei einer Zahl
//      - >= 0.8 diese mit als Fehler rejected
//      - < 0.8 diese Zahl resolved
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.
// ==> faehrt hier vollgas darueber, das Resolving kommt erst nach allen 10 Aufrufen
function calcX(zahl) {
    console.log("(A) zahl:"+zahl)
    let p = new Promise(function (resolve, reject) {

        // Do an async task async task and then...

        if (zahl < 0.8 /* good condition */) {
            console.log("(A) ... resolving ...");
            // wird dem THEN HANDLER als CALLBACK uebergeben
            resolve('(A) Success! ' + zahl);
        }
        else {
            console.log("(A) ... rejecting ...");
            // wird dem CATCH HANDLER als CALLBACK uebergeben
            reject('(A) Failure! '+ zahl);
        }
    });
    return p
}
//console.log(calcX(0.5))
calcX(0.4).then(console.log).catch(console.log)
calcX(0.8).then(console.log).catch(console.log)
//
for (i = 0; i<10; i++){
   //  calcX(i/10).then(console.log).catch(_=>_)
    calcX(i/10).then(console.log).catch(console.log)
}




// b
// Ergänze calcX so, dass Sie jeweils um Math.random()*100 wartet bevor sie ein Resultat generiert.
// Rufe die Funktion 10 mal auf und logge die Ergebnisse.
// Was ist anders im Vergleich zum Verhalten unter 1a?
// ==> Die Reihenfolge der Ergebnisse ist nicht mehr gleich, wie die der Aufrufe.
function calcXWait(zahl) {
    console.log("(B) zahl:"+zahl)

    let p = new Promise(function (resolve, reject) {

        // Do an async task async task and then...
        setTimeout(/* hier der callback */ function(){
            console.log("(B) ... in timeout ...");

            if (zahl < 0.8 /* good condition */) {
                console.log("(B) ... resolving ...");
                resolve('(B) Success! ' + zahl);
            }
            else {
                console.log("(B) ... rejecting ...");
                reject('(B) Failure! '+ zahl);
            }
        }, Math.random()*1000);
    });
    return p
}
calcXWait(0.4).then(console.log).catch(console.log)
calcXWait(0.8).then(console.log).catch(console.log)
for (i = 0; i<10; i++){
    //  calcXWait(i/10).then(console.log).catch(_=>_)
    calcXWait(i/10).then(console.log).catch(console.log)
}

// c
// Rufe die Funktion calcX 10 mal auf, summiere alle erfolgreichen Werte.
// Logge die fehlschläge.
// Verwende jeweils i/10 als Parameterwert.

// Loesung: Promise.all
// 1c
let i = 0
let promises = []
while(++i <= 10){
    promises.push(calcX(i/10)
                      .catch((e)=>{
                          console.error(e)
                          return 0
                      }))
}
// Promise.all wartet bis alle Promises eingeloest sind (than oder catch)
Promise.all(promises)
    .then((values)=>{
        return values.reduce((sum, value)=>sum+=value, 0)
    })
    .then(console.log)