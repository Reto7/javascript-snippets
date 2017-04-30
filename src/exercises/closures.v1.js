// 1 
// a. Was gibt folgender Code aus?

// b. Wie kann ich das Programm ändern, damit es tut was es tun sollte.


// mit "windows" funktionierts nur im Browser!
function fn(idx)
{
    window.setTimeout(()=>{
        window.alert(idx)
    }, 1000)
}
for(let i=0;i<4;i++){
    //console.log(i)
    // als einfache funktion
    fn(i);
}


//-----------------------------------------------
// mit "windows" funktionierts nur im Browser!
for(let i=0;i<4;i++) {
    //console.log(i)
    // als anaonyme funktion
    var ausgabe = function (idx) {
        window.setTimeout(()=> {
            window.alert(idx)
        }, 500)
    }
    ausgabe(i);
}
