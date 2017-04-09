// geht nicht!

/*
 * Array Initializer mit SPREAD OPERATOR
 * REST Parameter: Rest-Parameter sind spezielle letzte Parameter in einer Funktionsdefinition,
 * die mehrere an die Funktion übergebene Werte einfangen und in einem echten Array zur Verfügung stellen
 *   // Funktion mit zwei normalen Parametern
 *   // Alle weiteren Parameter landen im Array "rest"
 *     function fn(a, b, ...rest){
 *       return rest;
 *     }
 */

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function ausgeben(buchstabe){
    process.stdout.write(buchstabe);
}


let phrase = "Please enter password:";
let phraseArray = [...phrase];
//console.log(phraseArray)
phraseArray.forEach(function(entry) {
    //console.log(entry);
    //process.stdout.write(entry);

    // Usage!
    sleep(500).then(() => {
        // Do something after the sleep!
        //process.stdout.write(entry);
        //console.log(entry);
        ausgeben(entry)
    });

    //setTimeout(ausgeben,1000)

});



// console.log('\u0007');
// process.stdout.write('\x07')

// npm install play-sound
// let player = require('play-sound')(opts = {})
// player.play('beep.wav', function(err){
// })

// npm install play
// let play = require('play');
// play.sound('beep.wav', function(){ });

// npm install gulp-util
//gutil = require('gulp-util');
//gutil.beep();